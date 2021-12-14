import { IUserInfo } from '@/interfaces';
import { login } from '@/services';
import { setToken } from '@/utils';
import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';

// 模块内部state接口
export interface UserModelState {
  userInfo: IUserInfo;
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
}

// 模块的定义
const UserModel: UserModelType = {
  namespace: 'user',

  state: {
    userInfo: {} as IUserInfo,
  },

  // 异步action
  effects: {
    *login({ payload }, { call, put }) {
        let result = yield login(payload);
        console.log('result...', result);
        // 设置cookie
        if (result.access_token){
          setToken(`${result.token_type+result.access_token}`, result.expires_in);
        }
        put({
          type: 'save',
          payload: result
        })
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
  }
};

export default UserModel;