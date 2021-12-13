import { ILoginForm } from '@/interfaces';
import { request } from 'umi';

// 登陆接口
export function login(data: ILoginForm){
    return request('/login?grant_type=admin', {
        method: "Post",
        data
    });
}