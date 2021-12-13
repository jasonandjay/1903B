import request from '@/utils/request';

// 获取地址列表
export function getAddressList(){
    return request.get('/p/address/list');
}

// 获取省市区数据
export function getAreaByPid(pid){
    return request.get('/p/area/listByPid?pid='+pid);
}