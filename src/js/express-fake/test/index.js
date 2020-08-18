const miniExpress = require('../lib/index')
const app = miniExpress()
// const app = require('express')()

app
  .get('/test', function(req, res) {
    // res.write(Buffer.from('hahaha'))
    // res.end()
  })
  .listen(7788, () => console.log('DONE!!'))
