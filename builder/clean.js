const fs = require('fs')

module.exports = function (options, cb) {
  fs.rmdirSync(options.path, { recursive: true })
  cb()
}
