const babel = require('@babel/core')
const loaderUtils = require('loader-utils')

function loader(source) {
  let options = loaderUtils.getOptions(this)
  let cb = this.async()
  babel.transform(source, {
    ...options,
    sourceMap: true,
    filename: this.resourcePath.split('/').pop()
  }, function(err, result) {
    cb(err, result.code, result.map)
  })
}


module.exports = loader