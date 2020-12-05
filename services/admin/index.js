// 请求对应的controller模块
const controller = require('../../controller/admin')
// 请求对应的模板对象
const model = require('../model')
const m  = model([
  'list',
  'add',
  'update',
  'del',
], 'admin')


const login = async ctx => {
  let res;
  try {
    await controller.login().then(result => {
      res = success(result)
    })
  } catch(err) {
    res = failed(err)
  }
  ctx.body = res
}

console.log('---------------------------------',{
  ...m,
  login,
}, '---------------------------------')

module.exports = {
  ...m,
  login,
}

// const add = async ctx => {
//   let res;
//   try {
//     const val = ctx.request.body
//     await controller.add(val).then(result => {
//       res = success(result)
//     })
//   } catch(err) {
//     res = failed(err)
//   }
//   ctx.body = res
// }

// const update = async ctx => {
//   let res;
//   try {
//     const val = ctx.request.body
//     await controller.update(val).then(result => {
//       res = success(result)
//     })
//   } catch(err) {
//     res = failed(err)
//   }
//   ctx.body = res
// }

// const del = async ctx => {
//   let res;
//   try {
//     const val = ctx.request.body
//     await controller.del(val).then(result => {
//       res = success(result)
//     })
//   } catch(err) {
//     res = failed(err)
//   }
//   ctx.body = res
// }

// // module.exports = {
// //   list,
// //   add,
// //   update,
// //   del,
// // }

