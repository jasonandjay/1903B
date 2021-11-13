import request from '@/utils/request';

// 获取文章列表
export function getArticleList(page=1, pageSize=12, status="publish"){
    return request.get('/api/article', {
        params: {page, pageSize, status}
    })
}