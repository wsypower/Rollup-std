/*
 * @Description:
 * @Author: wsy
 * @Date: 2023-03-27 13:05:27
 * @LastEditTime: 2023-03-28 14:40:09
 * @LastEditors: wsy
 */
const path = require('node:path')
const typescript = require('rollup-plugin-typescript2')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const { defineConfig } = require('rollup')

module.exports = defineConfig({
  input: ['src/index.ts', 'src/util/util.ts'],
  output: [{
    dir: 'dist/es',
    format: 'esm',
  },
  {
    dir: 'dist/cjs',
    format: 'cjs',
  }],
  plugins: [
    nodeResolve(),
    typescript(),
  ],
})
