import Layout from '@/layout'

const routerRouter = [{
    path: '/dashboard',
    component: Layout,
    children: [{
      path: 'index',
      component: () => import('@/views/views/dashboard'),
      name: 'Dashboard',
      meta: {
        title: '工作台',
        icon: 'table'
      },
    }]
  },
  {
    path: '/artilce',
    component: Layout,
    meta: {
        title: '文章管理',
        icon: 'table'
    },
    children: [{
      path: 'index',
      component: () => import('@/views/views/article/all'),
      name: 'PageManage',
      meta: {
        title: '所有文章',
        icon: 'table'
      },
    }, {
      path: 'index',
      component: () => import('@/views/views/article/category'),
      name: 'PageManage',
      meta: {
        title: '分类管理',
        icon: 'table'
      },
    }, {
      path: 'index',
      component: () => import('@/views/views/article/tag'),
      name: 'PageManage',
      meta: {
        title: '标签管理',
        icon: 'table'
      },
    }]
  },
  {
    path: '/page',
    component: Layout,
    children: [{
      path: 'index',
      component: () => import('@/views/views/pageManage'),
      name: 'PageManage',
      meta: {
        title: '页面管理',
        icon: 'table'
      },
    }]
  }, {
    path: '/knowledge',
    component: Layout,
    children: [{
      path: 'index',
      component: () => import('@/views/views/knowledge'),
      name: 'Knowledge',
      meta: {
        title: '知识小册',
        icon: 'pdf'
      },
    }]
  }, {
    path: '/poster',
    component: Layout,
    children: [{
      path: 'index',
      component: () => import('@/views/views/posterManage'),
      name: 'Dashboard',
      meta: {
        title: '海报管理',
        icon: 'table'
      },
    }]
  }, {
    path: '/comment',
    component: Layout,
    children: [{
      path: 'index',
      component: () => import('@/views/views/commentManage'),
      name: 'Dashboard',
      meta: {
        title: '评论管理',
        icon: 'table'
      },
    }]
  }, {
    path: '/email',
    component: Layout,
    children: [{
      path: 'index',
      component: () => import('@/views/views/emailManage'),
      name: 'Dashboard',
      meta: {
        title: '邮件管理',
        icon: 'table'
      },
    }]
  }, {
    path: '/file',
    component: Layout,
    children: [{
      path: 'index',
      component: () => import('@/views/views/fileManage'),
      name: 'Dashboard',
      meta: {
        title: '文件管理',
        icon: 'table'
      },
    }]
  }, {
    path: '/search',
    component: Layout,
    children: [{
      path: 'index',
      component: () => import('@/views/views/searchManage'),
      name: 'Dashboard',
      meta: {
        title: '搜索记录',
        icon: 'table'
      },
    }]
  }, {
    path: '/view',
    component: Layout,
    children: [{
      path: 'index',
      component: () => import('@/views/views/viewManage'),
      name: 'Dashboard',
      meta: {
        title: '访问统计',
        icon: 'table'
      },
    }]
  }, {
    path: '/user',
    component: Layout,
    children: [{
      path: 'index',
      component: () => import('@/views/views/userManage'),
      name: 'Dashboard',
      meta: {
        title: '用户管理',
        icon: 'table'
      },
    }]
  }, {
    path: '/setting',
    component: Layout,
    children: [{
      path: 'index',
      component: () => import('@/views/views/setting'),
      name: 'Dashboard',
      meta: {
        title: '系统设置',
        icon: 'table'
      },
    }]
  }
]
export default routerRouter
