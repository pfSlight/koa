const router = require('koa-router')()
const routes = require('../routes')

// 配置最终的路由，形式为
// router.get(url, service.action)
routes.forEach(item => {
  const service = require(`../services/${item.service}`)
  router[item.method](item.path, service[item.action])
})

module.exports = router

