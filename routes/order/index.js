const model = require('../model')
const methods = require('../methods')
module.exports = {
  ...model,
  'listu': { method: methods.post },
  'listb': { method: methods.post },
}