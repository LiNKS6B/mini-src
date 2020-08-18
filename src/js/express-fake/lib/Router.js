const Layer = require('./Layer')
const Route = require('./Route')

function proto() {
  function router(req, res, next) {
    // this.stack = []
  }
  router.stack = []
  Object.setPrototypeOf(router, proto)
  return router
}

module.exports = proto

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
  const self = this

  next()

  function next() {
    let layer = null
    let route = null
    let match = false
    /**
     * 跳过router route 报错等处理细节
     */
    while (!match && i < self.stack.length) {
      layer = self.stack[i++]
      route = layer.route
      match = layer.match(req.url)
    }

    if (match && route.methods[req.method.toLowerCase()]) {
      layer.handle(req, res, next)
      return
    }
    // 没有匹配到或匹配到了url但没有method
    return done()
  }
}
