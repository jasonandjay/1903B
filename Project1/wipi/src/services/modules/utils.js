import request from '@/utils/request';

// 生成海报
export function genePoster(data){
    return request.post('/api/poster', data)
}