const Mock = require('mockjs');
const config = require('../src/utils/config');
const {apiPrefix, api} = config;

const MenuList = {
  'CHI': [
    {
      id: '1',
      name: '租户管理',
      key: 'UserManage',
      child: [
        {
          id: '10',
          name: '租户管理',
          key: 'User',
          child: [
            {
              id: '100',
              name: '租户管理',
              key: 'UserList'
            }
          ]
        }
      ]
    }, {
      id: '2',
      name: '终端管理',
      key: 'TerminalManage',
      child: [
        {
          id: '20',
          name: '终端管理',
          key: 'Terminal',
          child: [
            {
              id: '200',
              name: '终端管理',
              key: 'TerminalList'
            }
          ]
        }
      ]
    }, {
      id: '3',
      name: '应用管理',
      key: 'ApplicationManage',
      child: [
        {
          id: '30',
          name: '应用管理',
          key: 'Application',
          child: [
            {
              id: '301',
              name: '用户应用管理',
              key: 'UserAppManage'
            }, {
              id: '302',
              name: '系统应用管理',
              key: 'SysAppManage'
            }, {
              id: '303',
              name: '镜像管理',
              key: 'MirrorManage'
            }
          ]
        },
        {
          id: '31',
          name: '应用管理',
          key: 'Application',
          child: [
            {
              id: '311',
              name: '用户应用管理',
              key: 'UserAppManage'
            }, {
              id: '312',
              name: '系统应用管理',
              key: 'SysAppManage'
            }, {
              id: '313',
              name: '镜像管理',
              key: 'MirrorManage'
            }
          ]
        }
      ]
    }
  ],
  'ENG': [
    {
      id: '1',
      name: 'UserManage',
      key: 'UserManage',
      child: [
        {
          id: '10',
          name: 'UserManage',
          key: 'User',
          child: [
            {
              id: '100',
              name: 'UserManage',
              key: 'UserList'
            }
          ]
        }
      ]
    }, {
      id: '2',
      name: 'TerminalManage',
      key: 'TerminalManage',
      child: [
        {
          id: '20',
          name: 'TerminalManage',
          key: 'Terminal',
          child: [
            {
              id: '200',
              name: 'TerminalManage',
              key: 'TerminalList'
            }
          ]
        }
      ]
    }, {
      id: '3',
      name: 'ApplicationManage',
      key: 'ApplicationManage',
      child: [
        {
          id: '30',
          name: 'ApplicationManage',
          key: 'Application',
          child: [
            {
              id: '301',
              name: 'UserAppManage',
              key: 'UserAppManage'
            }, {
              id: '302',
              name: 'SysAppManage',
              key: 'SysAppManage'
            }, {
              id: '303',
              name: 'MirrorManage',
              key: 'MirrorManage'
            }
          ]
        },
        {
          id: '31',
          name: 'ApplicationManage',
          key: 'Application',
          child: [
            {
              id: '311',
              name: 'UserAppManage',
              key: 'UserAppManage'
            }, {
              id: '312',
              name: 'SysAppManage',
              key: 'SysAppManage'
            }, {
              id: '313',
              name: 'MirrorManage',
              key: 'MirrorManage'
            }
          ]
        }
      ]
    }
  ]
}
module.exports = {
  [`POST ${apiPrefix}${api.getMenuList}`](req, res) {
    const {languageType} = req.body;
    const parentMenus = MenuList[languageType];
    res.json({code: '0000', message: 'Ok', menus: parentMenus});
  },
  [`POST ${apiPrefix}${api.getChildMenuList}`](req, res) {
    const {languageType, parentId} = req.body;
    const parentMenus = MenuList[languageType];
    const selectMenus = parentMenus.filter((item) => item.id === parentId);
    const childMenus = selectMenus[0].child;
    res.json({code: '0000', message: 'Ok', menus: childMenus});
  }
}
