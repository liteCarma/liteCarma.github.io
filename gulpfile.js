const gulp = require('gulp')
const {series, parallel} = gulp

const optionsGulp = {
  isDevelopment: true//!process.env.NODE_ENV || process.env.NODE_ENV === 'development' 
}

const pathMap = {
  bundles: 'bundles',
  styles: ['src/sass/**/*.{sass,scss}', 'src/css/**/*.css'],
  lint: 'src/js/**/*.js',
  assets: 'src/assets/**/*',
}

function lazyRequireTask (path, options = {}) {
  options.bundles = pathMap.bundles
  options.isDevelopment = optionsGulp.isDevelopment
  const task = {
    [options.name](cb) {
      return require(path).call(this, options, cb)
    }
  }
  return task[options.name]
}

const clean = lazyRequireTask('./builder/clean', {
  name: 'clean',
  path: pathMap.bundles
})

const styles = lazyRequireTask('./builder/styles', {
  name: 'styles',
  src: pathMap.styles
})

const jsmin = lazyRequireTask('./builder/compress', {
  name: 'jsmin',
  src: pathMap.lint
})

const serve = lazyRequireTask('./builder/serve', {name: 'serve'})

const lint = lazyRequireTask('./builder/eslint', { 
  name: 'lint',
  src: pathMap.lint
})

const assets = lazyRequireTask('./builder/assets', { 
  name: 'assets',
  src: pathMap.assets
})

const build = series(clean, parallel(styles, lint, assets))

const watch = function (cb) {
  gulp.watch(pathMap.styles, styles)
  gulp.watch(pathMap.assets, assets)
  cb()
}

module.exports = {
  assets,
  lint,
  clean,
  styles,
  jsmin,
  serve,
  build,
  dev: series(build, parallel(watch, serve))
}
