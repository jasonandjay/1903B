import request from '@/utils/request';

// 获取文章列表
export function getArticleList(page=1, pageSize=12, status="publish"){
    return request.get('/api/article', {
        params: {page, pageSize, status}
    })
}

// 获取文章详情
export function getArticleDetail(id){
    return request.get(`/api/article/${id}`)
}