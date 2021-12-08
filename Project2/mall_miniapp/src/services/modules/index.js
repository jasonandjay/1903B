import request from '@/utils/request';

// 获取分类列表
export function getTagList(){
    return request.get('/prod/tag/prodTagList');
}
