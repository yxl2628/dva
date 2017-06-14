import { getUserList } from '../services/userlist';
import { menuList, childMenuList } from '../services/menu';

export default {
  namespace : 'userlist',
  state : {
    data: []
  },
  effects : {
    *getUserList({ payload }, { put, call }) {
      const { data:{ data } } = yield call(getUserList,{ payload });
      yield put({type:'setUserList',payload:{ data }});
    },
  },
  reducers : {
    setUserList(state,{ payload:{ data } }){
      return {...state, data };
    },
  },
  subscriptions : {
    setup({dispatch, history}) {
      return history.listen(({pathname}) => {
          if (pathname === '/UserList') {
            dispatch({
              type: 'getUserList'
            });
          }
      });
    }
  }
}
