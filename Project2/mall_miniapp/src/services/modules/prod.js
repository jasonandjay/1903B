import request from '@/utils/request';

// 获取商品详情
export function getProdInfo(prodId){
    return request.get('/prod/prodInfo?prodId='+prodId);
}