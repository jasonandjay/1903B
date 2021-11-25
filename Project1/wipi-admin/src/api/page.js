import request from '@/utils/request'

export function getViewPage(page = 1, options = {}, pageSize = 12) {
  return request({
    url: '/api/page',
    params: {
      page,
      ...options,
      pageSize
    }
  })
}
