'use strict'

module.exports = function newMap (nodesInfo) {
  nodesInfo = nodesInfo.reduce((nodesInfo, nodeInfo) => {
    const {
      x,
      y,
      weight
    } = nodeInfo

    if (weight < 1) {
      nodesInfo[createCoordsIndex(nodeInfo)] = {
        x,
        y,
        weight
      }
    }

    return nodesInfo
  }, {})

  function createCoordsIndex ({ x, y }) {
    return `${x}-${y}`
  }

  function getDistance (nodeOne, nodeTwo) {
    return (
      Math.sqrt(
        (
          Math.pow(nodeOne.x - nodeTwo.x, 2)
        ) + (
          Math.pow(nodeOne.y - nodeTwo.y, 2)
        )
      )
    )
  }

  function createPath (node, path = []) {
    path.push(createCoordsIndex(node))
    if (node.parentNode != null) createPath(node.parentNode, path)
    return path
  }

  return function getPath (startCoords, destinationCoords) {
    let nodes = {}

    function createNode (coord, parentNode) {
      const coordsIndex = createCoordsIndex(coord)

      const nodeInfo = nodesInfo[coordsIndex]

      if (nodeInfo == null) return null

      let newNode = {
        parentNode,
        x: nodeInfo.x,
        y: nodeInfo.y,
        visited: false,
        h: getDistance(nodeInfo, destinationCoords),
        g: (
          parentNode == null ? 0 : (
            getDistance(nodeInfo, parentNode) + parentNode.g
          )
        ),
        get f () {
          return this.g + this.h + nodeInfo.weight
        }
      }

      const pastNodeConsideration = nodes[coordsIndex]

      if (
        pastNodeConsideration != null && (
          pastNodeConsideration.f < newNode.f || (
            pastNodeConsideration.f === newNode.f &&
            pastNodeConsideration.h < newNode.h
          )
        )
      ) {
        newNode = pastNodeConsideration
      }

      nodes[coordsIndex] = newNode

      return newNode
    }

    let currentNode = createNode(startCoords, null)

    while (
      currentNode != null && (
        currentNode.x === destinationCoords.x &&
        currentNode.y === destinationCoords.y
      ) === false
    ) {
      currentNode.visited = true

      ;[
        { x: currentNode.x, y: currentNode.y + 1 },
        { x: currentNode.x, y: currentNode.y - 1 },
        { x: currentNode.x - 1, y: currentNode.y },
        { x: currentNode.x - 1, y: currentNode.y + 1 },
        { x: currentNode.x - 1, y: currentNode.y - 1 },
        { x: currentNode.x + 1, y: currentNode.y },
        { x: currentNode.x + 1, y: currentNode.y + 1 },
        { x: currentNode.x + 1, y: currentNode.y - 1 }
      ].forEach(coords => createNode(coords, currentNode))

      currentNode = Object.keys(nodes).reduce((newCurrentNode, coordsIndex) => {
        const node = nodes[coordsIndex]

        if (node.visited === true) return newCurrentNode
        if (newCurrentNode === null) return node
        if (newCurrentNode.f < node.f) return newCurrentNode
        if (newCurrentNode.f > node.f) return node

        return newCurrentNode.h < node.h ? newCurrentNode : node
      }, null)
    }

    const destinationNode = nodes[createCoordsIndex(destinationCoords)]

    return destinationNode == null
      ? []
      : createPath(destinationNode)
  }
}
