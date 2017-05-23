const Mock = require('mockjs');
const config = require('../src/utils/config');
const {apiPrefix, api} = config;

const adminUsers = [
  {
    id: 0,
    username: 'admin',
    password: 'admin'
  }, {
    id: 1,
    username: 'guest',
    password: 'guest'
  }
]
module.exports = {
  [`POST ${apiPrefix}${api.userLogin}`](req, res) {
    const {username, password} = req.body;
    const user = adminUsers.filter((item) => item.username === username)
    if (user.length > 0 && user[0].password === password) {
      res.json({code: '0000', message: 'Ok'})
    } else {
      res.json({code: '0102', errorMessage: ''})
    }
  },
  [`GET ${apiPrefix}${api.userLogout}`](req, res) {
    res.status(200).end()
  }
}
