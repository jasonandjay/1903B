import request from '@/utils/request';

// 获取导航分类列表
export function getTagList(){
    return request.get('/prod/tag/prodTagList');
}

// 获取通知列表
export function getNoticeList(){
    return request.get('/shop/notice/topNoticeList');
}

// 获取通知列表
export function getSwiperImgs(){
    return request.get('/indexImgs');
}

// 通过tag获取商品列表
export function getProdList(tagId=1, size=6){ 
    return request.get('/prod/prodListByTagId', {tagId, size});
}