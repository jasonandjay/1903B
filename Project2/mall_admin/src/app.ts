import React from 'react';
import { RequestConfig, history } from 'umi';
import { message } from 'antd';
import { createLogger } from 'redux-logger';
// 全局loading
import Loading from '@/components/loading'
import { getToken } from './utils';

// dva运行时配置
export const dva = {
  config: {
    onAction: createLogger(),
    onError(e: Error) {
      message.error(e.message, 3);
    },
  },
};

const baseURL = '/api';
// 请求的配置项
export const request: RequestConfig = {
  timeout: 10000,
  errorConfig: {},
  middlewares: [],
  // 请求拦截器
  requestInterceptors: [(url, options) => {
    let token = getToken();
    // 给每个请求加个时间戳后缀，避免ajax缓存
    url = `${baseURL + url}`;
    url.indexOf('?') !== -1 ? url += `&t=${+new Date}` : url += `?t=${+new Date}`
    if (token) {
      (options.headers as any).Authorization = token;
    }
    return {
      url,
      options: { ...options, interceptors: true },
    };
  }],
  // 响应拦截器
  responseInterceptors: [response => {
    const codeMaps: { [key: string]: string } = {
      400: '请求出错',
      401: '请求未被授权',
      403: '请求被禁止',
      404: '接口没找到',
      500: '服务器内部错误',
      502: '网关错误',
      503: '服务不可用，服务器暂时过载或维护',
      504: '网关超时',
    };
    if (codeMaps[response.status]) {
      message.error(codeMaps[response.status]);
    }
    return response;
  }],
};

// 修改根组件配置
export function rootContainer(container) {
  return React.createElement('div', null, container, React.createElement(Loading));
}

// 导航守卫
export function onRouteChange({ location }) {
  let token = getToken();
  if (location.pathname !== '/login') {
    if (!token) {
      history.replace(`/login?redirect=${encodeURIComponent(location.pathname)}`);
    }
  } else {
    if (token) {
      history.replace('/');
    }
  }
}