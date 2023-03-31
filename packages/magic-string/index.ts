const fs = require('node:fs')
const MagicString = require('magic-string')

const code = 'console.log("Hello, world!");'
const magicString = new MagicString(code)

magicString.insertRight(code.length - 2, '----------------------')

console.log(magicString.toString())
