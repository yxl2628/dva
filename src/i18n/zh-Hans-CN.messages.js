const Login = {
    "common.login.title": "欢迎登录STAROTT",
    "common.login.username.label": "用户名",
    "common.login.username.vtype": "用户名必填！",
    "common.login.password.label": "密码",
    "common.login.password.vtype": "密码必填！",
    "common.login.remember": "记住密码",
    "common.login.forgotPass": "忘记密码",
    "common.login.login": "登录"
};
const errorResult = {
  "0101":	"无效的智能卡号.",
  "0102":	"无效的密码.",
  "0103":	"无效的验证码",
  "0104":	"无效的用户令牌.",
  "0105":	"无效的授权码.",
  "0106":	"无效的用户状态",
  "0201":	"服务没有内容.",
  "0202":	"没有有效的服务.",
  "0301":	"你没有订购的服务.",
  "0302":	"你没有权限访问这个内容.",
  "0401":	"请求参数错误",
  "0501":	"超过最大在线终端数",
  "9001":	"接口过期，停止使用",
  "9999":	"执行异常."
}
module.exports = Object.assign(
    {},
    Login,
    errorResult
);
