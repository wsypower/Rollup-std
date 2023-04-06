/*
 * @Description:
 * @Author: wsy
 * @Date: 2023-03-27 13:05:27
 * @LastEditTime: 2023-03-29 14:45:34
 * @LastEditors: wsy
 */
const path = require('node:path')
const typescript = require('rollup-plugin-typescript2')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const { defineConfig } = require('rollup')

module.exports = defineConfig({
  input: ['src/index.ts'],
  output: [
    {
      dir: 'dist/es',
      entryFileNames: '[name]-1.js',
      chunkFileNames: 'chunk-[hash].js',
      format: 'esm',
    },
    {
      dir: 'dist/cjs',
      format: 'cjs',
    },
  ],
  plugins: [
    nodeResolve(),
    commonjs(),
    typescript(),
  ],
  external: ['lodash'],
})
