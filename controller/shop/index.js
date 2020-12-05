const { query } = require('../../lib/mysql')
const { NtNUpdate } = require('../../helper')
const STATUS = require('../../enum')

// 新添店铺
const add = (val) => {
  const { account, name, password, address, phone, businessNo } = val
  let _sql = 'insert into lottery_shop(account,name,password,address,phone,business_no,status,create_time) values(?,?,?,?,?,?,?,now());'
  return query( _sql, [ account, name, password, address,phone,businessNo, STATUS.NORMAL] )
}

// 更改店铺
const update = (val) => {
  const { account, name, id, password, address, phone, businessNo, extraInfo} = val
  let _sql = 'update lottery_shop set '
  const { sql, args } = NtNUpdate({ account, name, password, address, phone,  business_no: businessNo, extra_info: extraInfo }, _sql)
  _sql = sql + 'where id = ?'
  return query( _sql, [...args, id] )
}

// 查询店铺
const list = val => {
  const sql = 'select * from lottery_shop where status != ?'
  return query(sql, [ STATUS.DEL ])
}

// 根据Id查询
const one = val => {
  const { id } = val
  const sql = 'select * from lottery_shop where status != ? and id = ?'
  return query(sql, [ STATUS.DEL, id ])
}


// 删除店铺
const del = val => {
  const { id } = val
  const sql = 'update lottery_shop set status = ? where id = ?'
  return query(sql, [ STATUS.DEL, id ])
}

module.exports = {
  add,
  list,
  one,
  update,
  del,
}

