import json from '@rollup/plugin-json'
import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'

export default {
  input: 'src/index.ts',
  output: [
    { file: 'dist/bundle.cjs.js', format: 'cjs' },
    { file: 'dist/bundle.es.js', format: 'es' },
  ],
  external: ['lodash'],
  plugins: [
    resolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
    typescript({
      exclude: ['node_modules/**'],
      lib: ['es5', 'es6', 'dom'],
      target: 'es5',
    }),
    json(),
  ]
}
