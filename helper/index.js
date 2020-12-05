/**
 * 
 * @param {*} params 参数对象
 * @param {*} sql sql语句
 * @description 根据参数对象去改变sql语句，最后返回对应的sql语句
 * @returns 返回处理后的sql语句
 */
const update = (params, sql) =>  {
  let keys = Object.keys(params)
  let arr = []
  keys.forEach((key) => {
    if (key) {
      sql = sql + `${key} = ? ,`
      arr.push(params[key])
    }
  })
  sql = sql.substring(0, sql.length - 1)
  return {
    args: arr,
    sql,
  }
}

module.exports = {
  NtNUpdate: update,
}