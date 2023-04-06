/*
 * @Description:
 * @Author: wsy
 * @Date: 2023-03-31 14:18:32
 * @LastEditTime: 2023-04-03 12:47:16
 * @LastEditors: wsy
 */
const MagicString = require('magic-string')

const bundle = new MagicString.Bundle()

bundle.addSource({
  filename: 'foo.js',
  content: new MagicString('var answer = 42;'),
})

bundle.addSource({
  filename: 'bar.js',
  content: new MagicString('console.log( answer )'),
})

// Sources can be marked as ignore-listed, which provides a hint to debuggers
// to not step into this code and also don't show the source files depending
// on user preferences.
bundle.addSource({
  filename: 'some-3rdparty-library.js',
  content: new MagicString('function myLib(){}'),
  ignoreList: false, // <--
})

// Advanced: a source can include an `indentExclusionRanges` property
// alongside `filename` and `content`. This will be passed to `s.indent()`
// - see documentation above

bundle.indent() // optionally, pass an indent string, otherwise it will be guessed
  .prepend('(function () {\n')
  .append('}());')

bundle.toString()
// (function () {
//   var answer = 42;
//   console.log( answer );
// }());

// options are as per `s.generateMap()` above
const map = bundle.generateMap({
  file: 'bundle.js',
  includeContent: true,
  hires: true,
})
