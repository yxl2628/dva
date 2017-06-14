const Login = {
  "common.login.title": "STAROTT",
  "common.login.username.label": "用户名",
  "common.login.username.vtype": "用户名必填！",
  "common.login.password.label": "密码",
  "common.login.password.vtype": "密码必填！",
  "common.login.remember": "记住密码",
  "common.login.forgotPass": "忘记密码",
  "common.login.login": "登录"
};
const Home = {
  "common.home.header.userinfo": "用户信息",
  "common.home.header.changepasswd": "修改密码",
  "common.home.header.logout": "退出"
};
const Logout = {
  "common.home.header.logout.title": "提示",
  "common.home.header.logout.content": "确定退出登录？",
  "common.home.header.logout.okText": "确定",
  "common.home.header.logout.cancelText": "取消"
};
const BaseUI = {
  "common.BaseUI.button.add": "添加",
  "common.BaseUI.button.search": "搜索",
  "common.BaseUI.button.edit": "修改",
  "common.BaseUI.button.delete": "删除",
  "common.BaseUI.table.total": "共",
  "common.BaseUI.table.result": "条数据",
}
const UserList = {
  "common.UserList.title": "租户管理",
  "common.UserList.search.title": "租户名称",
  "common.UserList.search.tip": "请输入租户名称",
}
const errorResult = {
  "0101": "无效的智能卡号.",
  "0102": "无效的密码.",
  "0103": "无效的验证码",
  "0104": "无效的用户令牌.",
  "0105": "无效的授权码.",
  "0106": "无效的用户状态",
  "0201": "服务没有内容.",
  "0202": "没有有效的服务.",
  "0301": "你没有订购的服务.",
  "0302": "你没有权限访问这个内容.",
  "0401": "请求参数错误",
  "0501": "超过最大在线终端数",
  "9001": "接口过期，停止使用",
  "9999": "执行异常.",
  "common.Error.PageNotFound": "您要请求的页面不存在",
}
module.exports = Object.assign({}, Login, Home, Logout, BaseUI, UserList, errorResult);
