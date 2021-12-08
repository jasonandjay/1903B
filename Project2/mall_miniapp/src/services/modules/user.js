import request from '@/utils/request';

// 登陆接口
export function login(principal){
    return request.post('/login?grant_type=mini_app', {principal});
}
