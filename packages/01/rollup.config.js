/*
 * @Description:
 * @Author: wsy
 * @Date: 2023-03-27 13:05:27
 * @LastEditTime: 2023-03-27 15:24:33
 * @LastEditors: wsy
 */
const path = require('node:path')
const typescript = require('rollup-plugin-typescript2')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
// import { terser } from 'rollup-plugin-terser'
const resolvePath = dir => path.resolve(__dirname, dir)

const buildOptions = {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'esm',
  },
  plugins: [
    nodeResolve,
    typescript,
    // terser,
  ],
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@': resolvePath('src'),
    },
  },
}
module.exports = buildOptions
