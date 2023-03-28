/*
 * @Description:
 * @Author: wsy
 * @Date: 2023-03-27 13:05:27
 * @LastEditTime: 2023-03-28 13:12:32
 * @LastEditors: wsy
 */
const path = require('node:path')
const typescript = require('rollup-plugin-typescript2')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const resolvePath = dir => path.resolve(__dirname, dir)

const buildOptions = {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'esm',
  },
  plugins: [
    nodeResolve(),
    typescript(),
  ],
}
module.exports = buildOptions
