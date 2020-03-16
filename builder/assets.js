const gulp = require('gulp')
const $ = require('gulp-load-plugins')()

module.exports = function assets (options) {
  return gulp.src(options.src, { since: gulp.lastRun(options.name) })
    .pipe($.newer(options.bundles))
    .pipe(gulp.dest(options.bundles))
}
