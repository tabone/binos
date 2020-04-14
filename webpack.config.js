'use strict'

const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    library: 'binos',
    filename: 'index.js',
    libraryTarget: 'umd2',
    globalObject: 'this',
    path: path.resolve(__dirname, 'dist')
  }
}
