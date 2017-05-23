import {login} from '../services/login';
import {routerRedux} from 'dva/router';

export default {
  namespace : 'login',
  state : {
    loginLoading: false
  },
  effects : {
    *login({
      payload
    }, {put, call}) {
      yield put({type: 'showLoginLoading'});
      const data = yield call(login, payload);
      sessionStorage.setItem("user", true);
      yield put(routerRedux.push('/'));
    },
    *logout({
      payload
    }, {put, call}) {
      sessionStorage.clear();
      yield put(routerRedux.push('login'));
    }
  },
  reducers : {
    showLoginLoading(state) {
      return {
        ...state,
        loginLoading: true
      }
    },
    hideLoginLoading(state) {
      return {
        ...state,
        loginLoading: false
      }
    }
  }
}
