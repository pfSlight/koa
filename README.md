# koa

## 技术栈： Koa2 + Koa-router + mysql

```javascript
controllers：负责直接和数据库进行连接（写sql，对参数进行处理）
services：负责传输数据
route：负责定义页面的路由
```

## 插件

```javascript
koa-session-minimal <-- 适用于koa2 的session中间件，提供存储介质的读写接口
koa-mysql-session   <-- 为koa-session-minimal中间件提供MySQL数据库的session数据读写操作
koa-static          <-- 处理静态资源 www.jianshu.com/p/cd97cf6d0738
```

## 目录

```javascript
koa/
|
+- controllers/  <-- 数据库操作层
|
+- routes/       <--  各个路由模块
|  |
|  +- index.js   <-- routes的跟文件
|  |
|  +- methods.js <-- 相关的method对象
|
+- services/     <-- 数据参数层
|
+- sql/          <-- 封装了基本的数据库连接操作
|
+- .gitignore
|
+- config.js/    <-- 数据库配置
|
+- index.js/     <-- 入口文件
|
+- package.json  <-- 项目描述文件
|
+- README.md
|
+- node_modules/ <-- npm安装的所有依赖包
```

## 运行

打开mysql,运行sql下的sql语句

```javascript
npm install
npm start
```

查看api下各个接口所需要的参数及路径

## 调通的接口

```javascript
http://localhost:3000/api/admin/list
```

## 路由

配置最终的路由，形式为

```javascript
router.get(url, service.action)
```
