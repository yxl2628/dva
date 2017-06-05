const Login = {
    "common.login.title": "Welcome To Login STAROTT",
    "common.login.username.label": "Username",
    "common.login.username.vtype": "Username Is Required",
    "common.login.password.label": "Password",
    "common.login.password.vtype": "Password Is Required",
    "common.login.remember": "Remember Me",
    "common.login.forgotPass": "Forgot Password",
    "common.login.login": "Login"
};
const Home = {
  "common.home.header.userinfo": "UserInfo",
  "common.home.header.changepasswd": "Change Password",
  "common.home.header.logout": "Logout",
};
const Logout = {
    "common.home.header.logout.title":"Message Alert",
    "common.home.header.logout.content":"Confirm To Logout?",
    "common.home.header.logout.okText":"Confirm",
    "common.home.header.logout.cancelText":"Cancel"
};
const errorResult = {
  "0101": "Invalid smart card number.",
  "0102": "Invalid password.",
  "0103": "Invalid verification code.",
  "0104": "Invalid user token.",
  "0105": "Invalid authorization code.",
  "0106": "Invalid user status",
  "0201": "The service has no contents.",
  "0202": "No valid services.",
  "0301": "You have no ordered services.",
  "0302": "You have no the authorization to visit this content.",
  "0401": "Request parmeter is error.",
  "0501": "Out max online number.",
  "9001": "Stop api service",
  "9999": "Execution exception."
}
module.exports = Object.assign(
    {},
    Login,
    Home,
    Logout,
    errorResult
);
