import {defineMessages} from 'react-intl';

const messages = defineMessages({
    title: {
        id: 'common.UserList.title',
        defaultMessage: '租户管理'
    },
    button: {
      add: {
        id: 'common.BaseUI.button.add',
        defaultMessage: '添加'
      },
      search: {
        id: 'common.BaseUI.button.search',
        defaultMessage: '搜索'
      },
      edit: {
        id: 'common.BaseUI.button.edit',
        defaultMessage: '修改'
      },
      delete: {
        id: 'common.BaseUI.button.delete',
        defaultMessage: '删除'
      }
    },
    search:{
      title:{
        id: 'common.UserList.search.title',
        defaultMessage: '租户名称'
      },
      tip:{
        id: 'common.UserList.search.tip',
        defaultMessage: '请输入租户名称'
      }
    }
});

export default messages;
