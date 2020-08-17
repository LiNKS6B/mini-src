const methods = require('./methods')
const Layer = require('./Layer')

module.exports = function Route(path) {
  this.path = path
  this.stack = []
  this.methods = {} // 标志当前path下所注册的http方法handler
}

const proto = Route.prototype

methods.forEach(method => {
  proto[method] = function(...handlers) {
    handlers.forEach(handler => {
      const layer = new Layer(this.path, handler)
      layer.method = method
      this.stack.push(layer)
      console.log(`Route: register a new ${method.toUpperCase()} handler`)
    })
    return route
  }
})

proto.dispatch = function() {
  console.log('dispatch')
}
