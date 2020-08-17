const Layer = require('./Layer')
const Route = require('./Route')

module.exports = function proto() {
  function router(req, res, next) {
    this.stack = []
  }
  Object.setPrototypeOf(router, proto)
  return router
}

/**
 * 创建一层Layer，并关联一个新的Route
 */
proto.route = function(path) {
  const route = new Route(path)
  const layer = new Layer(path, route.dispatch.bind(route))
  layer.route = route
  this.stack.push(layer)
  return route
}

proto.handle = function(req, res, done) {
  let i = 0
  let match = false

  if (!this.stack.length) {
    done()
    return
  }

  function next() {
    
    while (!match && i < this.stack.length) {
      const layer = this.stack[i++]
      const route = layer.route
      match = layer.match(req.url)
      // layer.handle(req, res, next)
    }

    if (!match) {
      
    }
  }

}
