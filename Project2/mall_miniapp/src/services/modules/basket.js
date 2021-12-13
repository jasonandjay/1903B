import request from '@/utils/request';

// 删除购物车商品
export function deleteItem(arr){
    return request.delete('/p/shopCart/deleteItem', arr, {body: arr});
}

