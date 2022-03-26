# Binos

Simple a-star pathfinder.

## Installation

```
npm install --save binos
```

## API

### const newMap = require('binos')([...nodes])

Function used to create a new map, `nodes` are an array of objects with the
following fields:

Field|Type|Description
-|-|-
`x`|`Number`|X Coordinate.
`y`|`Number`|Y Coordinate.
`weight`|`Number`|Weight of tile, ranging from 0 (best weight) to 1 (worst weight).

> NOTE: A node with weight of `1` is unpassable.

### const path = newMap(source, destination, options)

Function used to get the best path between `source` and `destination` within a
Binos Map.

#### `source` & `destination` Field:

Field|Type|Description
-|-|-
`x`|`Number`|X Coordinate.
`y`|`Number`|Y Coordinate.

#### `options`

Field|Type|Description
-|-|-
`diagonals`|`Boolean`|Indicates whether moving diagonally is accepted or not, by default it is set to `true`.
`calculateG`|`Number`|Used to calculate the `G` of a A* Pathfinding Node. By default its the distance between the nodes being considered.

## Example

```javascript
'use strict'

const newMap = require('binos')

const getPath = newMap([
  { x: 0, y: 0, weight: 0.5 },
  { x: 1, y: 0, weight: 0.4 },
  { x: 2, y: 0, weight: 0.3 },
  { x: 3, y: 0, weight: 0.9 },
  { x: 4, y: 0, weight: 0.8 },
  { x: 0, y: 1, weight: 0.2 },
  { x: 1, y: 1, weight: 0.9 },
  { x: 2, y: 1, weight: 0.8 },
  { x: 3, y: 1, weight: 0.6 },
  { x: 4, y: 1, weight: 0.9 },
  { x: 0, y: 2, weight: 0.9 },
  { x: 1, y: 2, weight: 0.6 },
  { x: 2, y: 2, weight: 0.1 },
  { x: 3, y: 2, weight: 1 },
  { x: 4, y: 2, weight: 0.6 },
  { x: 0, y: 3, weight: 0.3 },
  { x: 1, y: 3, weight: 0.6 },
  { x: 2, y: 3, weight: 1 },
  { x: 3, y: 3, weight: 0.8 },
  { x: 4, y: 3, weight: 0.7 },
  { x: 0, y: 4, weight: 1 },
  { x: 1, y: 4, weight: 1 },
  { x: 2, y: 4, weight: 0.3 },
  { x: 3, y: 4, weight: 1 },
  { x: 4, y: 4, weight: 0 }
])

console.log(
  getPath({ x: 0, y: 0 }, { x: 4, y: 4 })
)

// => [
//   { x: 4, y: 4 },
//   { x: 3, y: 3 },
//   { x: 2, y: 2 },
//   { x: 1, y: 1 },
//   { x: 0, y: 0 }
// ]

```
