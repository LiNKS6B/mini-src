const methods = require('./methods')
const Layer = require('./Layer')

function Route(path) {
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
      this.methods[method] = true
      this.stack.push(layer)
      console.log(`Route: register a new ${method.toUpperCase()} handler`)
    })
    return this
  }
})

proto.dispatch = function(req, res, done) {
  let i = 0
  const self = this

  if (!this.stack.length) {
    return done()
  }

  next()

  function next() {
    /**
     * 跳过报错等处理细节
     */
    const layer = self.stack[i++]

    if (!layer) {
      return done()
    }

    if (layer.method !== req.method.toLowerCase()) {
      return next()
    }

    layer.handle(req, res, done)
  }
}

module.exports = Route
