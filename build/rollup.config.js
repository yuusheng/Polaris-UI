import vue from '@vitejs/plugin-vue'
import typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import { name } from '../package.json'
import path from 'path'
import sass from 'node-sass'
import tailwindcss from 'tailwindcss'
import postcssImport from 'postcss-import'
import css from 'rollup-plugin-css-porter'

const file = (type) => `dist/${name}.${type}.js`

const overrides = {
  compilerOptions: { declaration: true },
  exclude: ['tests/**/*.ts', 'tests/**/*.tsx'],
}
const processSass = function (context) {
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
  external: ['../packages/index.css'],
  output: [
    {
      name,
      format: 'es',
      file: file('esm'),
    },
  ],
  plugins: [
    css({ output: 'bundle.css' }),
    nodeResolve(),
    vue(),
    typescript({ tsconfigOverride: overrides }),
    postcss({
      extract: true,
      extensions: ['css', 'scss'],
      process: [postcssImport(), tailwindcss(), processSass],
    }),
  ],
  external: ['vue'],
}
