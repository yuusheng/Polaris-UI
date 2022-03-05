import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'
const postcss = require('rollup-plugin-postcss')
import pkg from '../package.json'
import path from 'path'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
const deps = Object.keys(pkg.dependencies)
const sass = require('node-sass')
import tailwindcss from 'tailwindcss'
import postcssImport from 'postcss-import'

const name = pkg.name
const file = (type) => `dist/${pkg.name}.${type}.js`

const overrides = {
  compilerOptions: { declaration: true },
  exclude: ['tests/**/*.ts', 'tests/**/*.tsx'],
}
const processSass = function (context, payload) {
  return new Promise((resolve, reject) => {
    sass.render(
      {
        file: context,
      },
      function (err, result) {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      }
    )
  })
}
export { name, file }

export default {
  input: path.resolve(__dirname, '../packages/index.ts'),
  output: [
    {
      name,
      format: 'es',
      file: file('esm'),
    },
  ],
  plugins: [
    terser(),
    nodeResolve(),
    // commonjs(),
    vue(),
    //   {
    //   target: 'browser',
    //   css: false,
    //   exposeFilename: false,
    // }
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          declaration: true,
        },
        include: ['packages/**/*', 'typings/shims-vue.d.ts'],
        exclude: ['node_modules', 'packages/**/__tests__/*'],
      },
      abortOnError: false,
    }),
    postcss({
      extract: true,
      extensions: ['css', 'scss'],
      process: [postcssImport(), tailwindcss(), processSass],
    }),
    commonjs({ include: ['node_modules/**', 'node_modules/**/*'] }),
  ],
  external: ['vue', 'echarts', 'lodash-es'],
}
