// 实例化路由
const router = require('koa-router')()
const routes = require('../routes')
const fileHelper = require('../utils/fileHelper')
const path = require('path')

/**
 * 配置最终的路由，形式为
 * router.get(url, service.action)
 * router.get('/', async (ctx, next) => {
 *    ctx.response.body = '<h1>Index</h1>';
 * });
 */
routes.forEach(item => {
  const service = require(`../services/${item.service}`)
  router[item.method](item.path, service[item.action]) // 见注释
})

const routerPath = path.join(__dirname,'router-data.json')
fileHelper.fileIsExist(routerPath)
let router_str = JSON.stringify(router,"","\t") // let str = JSON.stringify(router,null,"\t")
fileHelper.wirteFile(routerPath, router_str, () => {
  console.log('--------------------------------------------------------------------------------router写入成功')
})
const routesPath = path.join(__dirname,'routes-data.json')
let routes_str = JSON.stringify(routes,"","\t")
fileHelper.wirteFile(routesPath, routes_str, () => {
  console.log('================================================================================routes写入成功')
})

module.exports = router
