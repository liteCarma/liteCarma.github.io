const gulp = require('gulp')
const $ = require('gulp-load-plugins')()
const combiner = require('stream-combiner2').obj
const through2 = require('through2').obj
const fs = require('fs')

module.exports = function lint (options) {
  let eslintResults = {}
  const tempDir = process.cwd() + '/tmp';
  

  if(!fs.existsSync(tempDir) ){
    fs.mkdirSync(tempDir)
  }

  const cacheFilePath = tempDir + '/lintCache.json'
  try {
    eslintResults = JSON.parse(fs.readFileSync(cacheFilePath))
  } catch {}

  return combiner(
    gulp.src(options.src, { read: false }),
    $.if(
      function (file) {
        return eslintResults[file.path] && eslintResults[file.path].mtime === file.stat.mtime.toJSON()
      },
      through2(function (file, enc, cb) {
        file.eslint = eslintResults[file.path].eslint
        cb(null, file)
      }),
      combiner(
        through2(function (file, enc, cb) {
          file.contents = fs.readFileSync(file.path)
          cb(null, file)
        }),
        $.eslint(),
        through2(function (file, enc, cb) {
          console.log(file.eslint)
          eslintResults[file.path] = {
            eslint: file.eslint,
            mtime: file.stat.mtime
          }
          cb(null, file)
        })
      )
    ),
    $.eslint.format()
      .on('end', function () {
        fs.writeFileSync(cacheFilePath, JSON.stringify(eslintResults))
      })
  )
}
