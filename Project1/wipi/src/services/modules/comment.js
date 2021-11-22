import request from '@/utils/request';

// 获取评论列表
export function getCommentList(id, page=1){ 
    return request.get(`/api/comment/host/${id}?page=${page}&pageSize=6`)
}

// 发布评论
export function publishComment(content, hostId, options={}){
    let data = {
        name: 'jason',
        email: '342690199@qq.com',
        url: window.location.pathname,
        content,
        hostId,
        ...options
    }
    return request.post('/api/comment', data)
}