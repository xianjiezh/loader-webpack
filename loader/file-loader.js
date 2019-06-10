let loaderUtils = require('loader-utils')

function loader(source) {
  let filename = loaderUtils.interpolateName(this, '[hash:8].[ext]', {
    content: source
  })
  this.emitFile(filename, source)
  return `module.exports = '${filename}'`
}
loader.raw = true // 开启二进制
module.exports = loader