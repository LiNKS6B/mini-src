const { URL } = require('url')

function Layer(path, handler) {
  this.path = path
  this.handler = handler
}

module.exports = Layer

const proto = Layer.prototype

proto.handle = function(req, res, next) {
  const fn = this.handler
  fn(req, res, next)
}

proto.match = function(url) {
  const pathname = url.charAt(0) === '/' ? url : new URL(url).pathname
  return pathname === this.path
}
