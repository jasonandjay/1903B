import { IAuthorityItem, IMenuList } from '@/interfaces';
import { getSystemNav } from '@/services';
import { getToken } from '@/utils';
import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';

// 模块内部state接口
export interface SysModelState {
  menuList: IMenuList[];
  authorities: IAuthorityItem[];
}

// 模块的接口
export interface SysModelType {
  namespace: 'sys';
  state: SysModelState;
  effects: {
    getNavMenu: Effect;
  };
  reducers: {
    save: Reducer<SysModelState>;
    // 启用 immer 之后
    // save: ImmerReducer<IndexModelState>;
  };
  subscriptions: { setup: Subscription };
}

// 模块的定义
const SysModel: SysModelType = {
  namespace: 'sys',

  state: {
    menuList: [],
    authorities: []
  },

  // 异步action
  effects: {
    *getNavMenu({ payload }, { call, put, select}) {
      /**
       * 判断获取导航菜单的两个条件
       * 1. 有登陆态
       * 2. 没有导航菜单信息
       **/ 
      let token = getToken();
      console.log('token...', token);
      // 从redux中拿到状态
      const menuList = yield select(state=>state.sys.menuList);

      if (!menuList.length && token){
        let result = yield getSystemNav();
        yield put({
          type: 'save',
          payload: result
        })
      }
    },
  },

  // 同步action
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname !== '/login') {
          dispatch({
            type: 'getNavMenu',
          });
        }
      });
    },
  },
};

export default SysModel;