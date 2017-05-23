import {login} from '../services/login';
import {routerRedux} from 'dva/router';

export default {
  namespace : 'app',
  state : {
    user: sessionStorage.getItem("user")
  },
  effects : {
  },
  reducers : {
  },
  subscriptions: {
    setup({ dispatch, history }) {
      if(sessionStorage.getItem("user")==null){
        dispatch(routerRedux.push("login"));
      }
    },
  }
}
