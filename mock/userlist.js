const Mock = require('mockjs');
const config = require('../src/utils/config');
const {apiPrefix, api} = config;

const Random = Mock.Random
const MenuList = Mock.mock({
      code:"0000",
      'data|10-99': [{
          'id|+1': '@guid',
          'username':'@last',
          'name':'@cname',
          'tel':'15010755317',
          'createDate':'@datetime',
      }]
  });
module.exports = {
  [`POST ${apiPrefix}${api.getUserList}`](req, res) {
    res.json(MenuList);
  }
}
