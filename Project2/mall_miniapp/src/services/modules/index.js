import request from '@/utils/request';

export function getTagList(){
    return request.get('/prod/tag/prodTagList');
}
