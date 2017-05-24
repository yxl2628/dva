# dva
dva的示例代码，包含国际化解决方案、动态路由加载、Mock数据、统一的错误处理等，能够当做项目的基础来使用，如果有什么错误或者繁琐的地方，请见谅，本人菜鸟小白，水平不高，努力学习中。。。
 
下面的大部分解决方案也好，写法也好，基本上参考了[dva](https://github.com/dvajs/dva)官方的示例，只不过官方事例可能针对某一个方面而已，我其实是来做总结的
 
### 目录结构说明
- mock
  
    所有mock数据文件存放的地方，建议按照模块来划分文件，比如登录login.js、用户user.js，语法规则如：
    
    
    export default {
      // 支持值为 Object 和 Array
      'GET /api/users': { users: [1,2] },

      // GET POST 可省略
      '/api/users/1': { id: 1 },

      // 支持自定义函数，API 参考 express@4
      'POST /api/users/create': (req, res) => { res.end('OK'); },

      // Forward 到另一个服务器
      'GET /assets/*': 'https://assets.online/',

      // Forward 到另一个服务器，并指定子路径
      'GET /someDir/(.*)': 'https://g.alicdn.com/tb-page/taobao-home',
    };
    
    值得说明的是，dva本身是要求在.roadhogrc.mock.js中实现mock的，但是考虑到如果所有数据都在同一个文件中书写，不利于维护，参考了大神的写法，在.roadhogrc.mock.js中，写的是动态加载mock这个文件夹下的所有文件。
    
    
    const mock = {}
    require('fs').readdirSync(require('path').join(__dirname + '/mock')).forEach(function(file) {
      Object.assign(mock, require('./mock/' + file))
    })
    module.exports = mock
    
    
- public
  
    公共文件夹，这个文件夹下的所有文件，在build的时候，会直接copy过去，所以一般只用来放index.html和网站icon，当然，国际化的话，所有国际化index.html的入口都在这里，如index-en.html、index-fr.html等。
    
- src/assets
  
    静态资源存放的路径，一般情况下会把用到的image文件存放在此处。
    
- src/components
  
    UI组件存放目录，一般情况下，我们将所有的UI组件存放在此，命名规则首字母大写的驼峰式命名，文件以jsx结尾，用以区分组件和js，同时按照组件类型或模块来划分目录，比如Login/Login.jsx、Home/Home.jsx，同时在组件的同级目录下，使用less来定义样式，如Login/login.less、Home/home.less。
  
- src/i18n
    国际化文件的存放路径，所有的国际化文件，都放在此目录下维护，命名方式，通俗易懂即可。比如：zh-Hans-CN.messages.js、en-US.messages.js
    
- src/models
  
    model存放目录，dva整合了redux，所以这里基本上就是redux的目录，具体语法规则参考https://github.com/dvajs/dva/blob/master/docs/Concepts_zh-CN.md
    
- src/routes
  
    路由组件存放的目录，一般情况下，我们认为一个页面，就算一个路由组件，每个路由组件是由若干个UI组件组成的，命名规则与UI组件一致。
  
- src/services
  
    与后台service交互的文件目录，一般与model一致，即一个model对应一个service，只维护与后台的交互。
  
- src/utils
  
    全局通用工具存放在此目录。
    
- src/index.js
  
    入口文件。
   
- src/index.less
  
    全局样式文件，一般情况下，全局样式可以再次定义。
  
- src/router.js
  
    路由配置文件，这里采用了动态加载的方式配置路由，如果不需要动态加载，可以按照以下示例来配置：
    ```javascript
    function RouterConfig({ history }) {
      return (
        <Router history={history}>
          <Route path="/index" component={IndexPage} />
          <Route path="/detail" component={VideoDetail} />
          <Route path="/video" component={VideoPage} />
          <Route path="/videoScale" component={VideoPageScale}/>
          <Route path="/" component={Home} />
        </Router>
      );
    }

    export default RouterConfig;
    ```
    
- .editorconfig
  
    规范代码风格的文件，我还不是很了解，等了解之后，在补充。
  
- .eslintrc
  
    语法校验的文件，同样也不了解，等之后补充
  
- .gitignore
  
    略，github上混，这个不知道，不科学。
  
- .roadhogrc
  
    roadhog 是一个 cli 工具，提供 server、 build 和 test 三个命令，分别用于本地调试和构建，这个是roadhog的配置文件，配置规则详见：https://github.com/sorrycc/roadhog/blob/master/README.md
    
- .roadhogrc.mock.js
  
    上面已经说过了，这个是roadhog支持mock的配置文件。

- package.json
  
    略，这个不懂说不过去。
 
