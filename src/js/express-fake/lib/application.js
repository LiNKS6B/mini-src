const Router = require('./Router')
const methods = require('./methods')
const http = require('http')

function App() {}

module.exports = App

const proto = App.prototype

/**
 * 懒挂载 若当前没有挂载Router则挂载
 */
proto.lazyRouter = function() {
  if (!this._router) {
    this._router = new Router()
  }
}

proto.listen = function(...args) {
  http
    .createServer((req, res) => {
      this.handle(req, res)
    })
    .listen(...args)
}

methods.forEach(method => {
  proto[method] = function(path, ...handlers) {
    this.lazyRouter()
    /**
     * 每当调用app.method则调用router的route方法
     */
    const route = this._router.route(path)
    route[method](...handlers)
    return this
  }
})

/**
 * 处理请求
 */
proto.handle = function(req, res) {
  // 源代码中是finalhandler库，此处简化
  const done = function() {
    res.end(Buffer.from('Unhandle!!'))
  }
  if (!this._router) {
    // 没有handler
    done()
  }
  this._router.handle(req, res, done)
}
