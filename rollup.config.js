import buildOptimizer from 'rollup-plugin-angular-optimizer'
import nodeResolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';
import paths from 'rollup-plugin-paths';
import pathMapping from 'rxjs/_esm5/path-mapping';

export default {
  input: `built/index.js`,
  output: {
    name: 'hw',
    file: `dist/bundle.js`,
    format: 'iife',
    sourcemap: true
  },
  plugins: [
    paths(pathMapping()),
    nodeResolve({ jsnext: true, module: true }),
    buildOptimizer(),
    uglify({
      mangle: true,
      compress: {
        pure_getters: true,
        passes: 3,
        global_defs: {
          'ngDevMode': false,
        }
      }
    })
  ],
  external: []
}
