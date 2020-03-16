const gulp = require('gulp')
const browserSync = require('browser-sync').create()

module.exports = function serve(options) {
  browserSync.init({
    server: {
      baseDir: options.bundles || '../bundles'
    }
  })

  gulp.watch(options.bundles).on('change', browserSync.reload)
}
