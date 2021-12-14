import { request } from 'umi';

// 获取导航菜单
export function getSystemNav(){
    return request('/sys/menu/nav', {
        method: "GET"
    });
}