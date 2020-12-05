const Koa = require('koa')
const path = require('path')
const bodyParser = require('koa-bodyparser')
const session = require('koa-session-minimal')
const MysqlStore = require('koa-mysql-session')
const config = require('./config')
const koaStatic = require('koa-static')
const routers = require('./routes/index')

// 创建一个Koa对象表示web app本身
const app = new Koa()

// 存放sessionId的cookie配置
const cookie = {
  maxAge: 360*12*1000, // cookie有效时长(ms)
  expires: '',  // cookie失效时间
  path: '', // 写cookie所在的路径
  domain: '', // 写cookie所在的域名
  httpOnly: true, // 是否只用于http请求中获取
  overwrite: true,  // 是否允许重写
}

// 配置存储session信息的mysql
const sessionMysqlStore = {
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  host: config.database.HOST
}

// 配置中间件
app.use(session({
  key: 'USER_SID',
  store: new MysqlStore(sessionMysqlStore),
  cookie
}))

// 对于任何请求，app将调用该异步函数处理请求，配置跨域
app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With')
  await next(); // 调用下一个middleware
});

// 配置静态资源加载中间件
app.use(koaStatic(
  path.join(__dirname, './public')
))

// 使用表单解析的中间件
app.use(bodyParser())

// 使用新建的路由文件
// app.use(routers.routes())
//    .use(routers.allpwedMethods())

// 监听在3000
app.listen(config.port)
console.log('app started at port 3000...');