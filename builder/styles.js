const gulp = require('gulp')
const $ = require('gulp-load-plugins')()
const combiner = require('stream-combiner2').obj

module.exports = function styles (options) {
  return combiner(
    gulp.src(options.src, {since: gulp.lastRun(options.name) }),
    $.remember(),
    $.if(options.isDevelopment, $.sourcemaps.init()),
    $.sass(),
    $.concat('project.css'),
    $.autoprefixer(),
    $.cleanCss({
      format: options.isDevelopment? 'beautify': false
    }),
    $.if(options.isDevelopment, $.sourcemaps.write()),
    gulp.dest(`${options.bundles}/css`),
  )
  .on('error', $.notify.onError((err) => ({
    title: 'Styles',
    message: err.message
  })))
}
