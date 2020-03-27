const gulp = require('gulp')
const $ = require('gulp-load-plugins')()

module.exports = function jsmin (options) {
  return  gulp.src(options.src, {lastRun: gulp.lastRun(options.name)})
          .pipe($.concat('project.js'))
          .pipe($.if(!options.isDevelopment, $.minify(
            {
              ext:{
                //src:'-debug.js',
                min: '.js'
              },
              noSource: true
            }
          )))
          .pipe(gulp.dest(options.bundles + '/js'))
}
