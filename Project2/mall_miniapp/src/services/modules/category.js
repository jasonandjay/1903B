import request from '@/utils/request';

// 获取分类页面左边菜单
export function getCategoryList(){
    return request.get('/category/categoryInfo');
}

// 获取分类页面右边商品列表
export function getCategoryProdList(categoryId){
    return request.get('/prod/pageProd?categoryId='+categoryId);
}