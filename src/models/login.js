import { login } from '../services/login';
import { menuList, childMenuList } from '../services/menu';
import { setSession } from '../utils';
import {routerRedux} from 'dva/router';

export default {
  namespace : 'login',
  state : {
    loginLoading: false
  },
  effects : {
    *login({ payload }, { put, call, select }) {
      yield put({type: 'showLoginLoading'});
      const languageType = yield select(state => state.home.languageType);
      const { data:{user} } = yield call(login, payload);
      setSession("user", user);
      const { data:{menus} } = yield call(menuList,{languageType});
      setSession("menus", menus);
      setSession("menuid", menus[0].id);
      setSession("selectMenuId", menus[0].id);
      const { data:{menus:childMenus} } = yield call(childMenuList,{languageType,parentId:menus[0].id});
      setSession("childMenus", childMenus);
      setSession("childMenuId", childMenus[0].id);
      setSession("selectChildMenuId", childMenus[0].child[0].id);
      yield put(routerRedux.push('/'));
    }
  },
  reducers : {
    showLoginLoading(state) {
      return { ...state, loginLoading: true }
    },
    hideLoginLoading(state) {
      return { ...state, loginLoading: false }
    }
  }
}
