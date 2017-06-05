import { childMenuList } from '../services/menu';
import { setSession, getSession } from '../utils';
import { routerRedux } from 'dva/router';

export default {
  namespace : 'home',
  state : {
    languageType:window.appLocale.language,
    user: getSession("user"),
    menus: getSession("menus"),
    menuid: getSession("menuid"),
    selectMenuId: getSession("selectMenuId"),
    childMenus: getSession("childMenus"),
    childMenuId: getSession("childMenuId"),
    selectChildMenuId: getSession("selectChildMenuId"),
  },
  effects : {
    *getChildMenuList({ payload:{ parentId } }, {put, call, select}) {
      const languageType = yield select(state => state.home.languageType);
      const { data: { menus } } = yield call(childMenuList,{ languageType, parentId });
      const selectMenuId = parentId;
      const childMenus = menus;
      const childMenuId = childMenus[0].id;
      const selectChildMenuId = childMenus[0].child[0].id;
      yield put({ type: 'setChildMenus', payload: { selectMenuId, childMenus, childMenuId, selectChildMenuId } });
      yield put(routerRedux.push('/'+childMenus[0].child[0].key));
    },
    *logout({ payload }, { put, call }) {
      sessionStorage.clear();
      yield put(routerRedux.push('/login'));
    },
    *changeMenu({ payload:{ menuId } }, { put, call }) {
      yield put({ type: 'setSelectMenu', payload: { selectChildMenuId: menuId } });
    },
  },
  reducers : {
    init(state,{ payload:{ user, menus, menuid, childMenus, childMenuId, selectMenuId, selectChildMenuId } }){
      return {...state, user, menus, menuid, childMenus, childMenuId, selectMenuId, selectChildMenuId };
    },
    setChildMenus(state,{ payload:{ selectMenuId, childMenus, childMenuId, selectChildMenuId } }){
      setSession('selectMenuId',selectMenuId);
      setSession('childMenus',childMenus);
      setSession('childMenuId',childMenuId);
      setSession('selectChildMenuId',selectChildMenuId);
      return {...state, selectMenuId, childMenus, childMenuId, selectChildMenuId };
    },
    setSelectMenu(state,{ payload:{ selectChildMenuId } }){
      setSession('selectChildMenuId',selectChildMenuId);
      return {...state, selectChildMenuId }
    },
    openMenu(state,{ payload:{ childMenuId } }){
      setSession('childMenuId',childMenuId);
      return {...state, childMenuId }
    },
  },
  subscriptions : {
    setup({dispatch, history}) {
      return history.listen(({pathname}) => {
        const user = getSession("user");
        const menus = getSession("menus");
        const menuid = getSession("menuid");
        const selectMenuId = getSession("selectMenuId");
        const childMenus = getSession("childMenus");
        const childMenuId = getSession("childMenuId");
        const selectChildMenuId = getSession("selectChildMenuId");
        if (!user&&pathname!=='/login') {
          dispatch(routerRedux.push("/login"));
        }else{
          if (pathname === '/') {
            dispatch({
              type: 'init',
              payload: { user, menus, menuid, childMenus, childMenuId, selectMenuId, selectChildMenuId }
            });
            dispatch(routerRedux.push('/'+childMenus[0].child[0].key));
          }
        }
      });
    }
  }
}
