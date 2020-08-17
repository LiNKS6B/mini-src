const URL = require('url')

module.exports = function Layer(path, handler) {
  this.path = path
  this.handler = handler
}

const proto = Layer.prototype

proto.handle = function() {
  this.handler()
}

proto.match = function(url) {
  const pathname = URL.parse(url).pathname
  return pathname === this.path
}
