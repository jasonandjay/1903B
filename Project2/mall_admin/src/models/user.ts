import { login } from '@/services';
import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';

// 模块内部state接口
export interface UserModelState {
  name: string;
}

// 模块的接口
export interface UserModelType {
  namespace: 'user';
  state: UserModelState;
  effects: {
    login: Effect;
  };
  reducers: {
    save: Reducer<UserModelState>;
    // 启用 immer 之后
    // save: ImmerReducer<IndexModelState>;
  };
  subscriptions: { setup: Subscription };
}

// 模块的定义
const UserModel: UserModelType = {
  namespace: 'user',

  state: {
    name: '',
  },

  // 异步action
  effects: {
    *login({ payload }, { call, put }) {
        let result = yield login(payload);
        console.log('result...', result);
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
        if (pathname === '/') {
          dispatch({
            type: 'query',
          });
        }
      });
    },
  },
};

export default UserModel;