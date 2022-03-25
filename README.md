# Binos

Simple a-star pathfinder.

```javascript
'use strict'

const newMap = require('../dist/index.js')

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
  getPath({ x: 0, y: 0 }, { x: 4, y: 4 }, { diagonals: true })
)
// => [
//   { x: 4, y: 4 },
//   { x: 3, y: 3 },
//   { x: 2, y: 2 },
//   { x: 1, y: 1 },
//   { x: 0, y: 0 }
// ]

```
