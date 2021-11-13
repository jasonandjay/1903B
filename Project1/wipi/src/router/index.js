import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Article',
    component: ()=> import('@/views/article/Index.vue')
  },
  {
    path: '/article/:id',
    name: 'ArticleDetail',
    component: ()=> import('@/views/article/Detail.vue')
  },
  {
    path: '/category/:id',
    name: 'Category',
    component: ()=> import('@/views/category/Index.vue')
  },
  {
    path: '/archive',
    name: 'Archive',
    component: ()=> import('@/views/archive/Index.vue')
  },
  {
    path: '/archive/:id',
    name: 'ArchiveDetail',
    component: ()=> import('@/views/archive/Detail.vue')
  },
  {
    path: '/knowledge',
    name: 'Knowledge',
    component: ()=> import('@/views/knowledge/Index.vue')
  },
  {
    path: '/knowledge/:id',
    name: 'KnowledgeDetail',
    component: ()=> import('@/views/knowledge/Detail.vue')
  },
  {
    path: '/knowledge/:id/:cid',
    name: 'KnowledgeChapter',
    component: ()=> import('@/views/knowledge/chapter/Index.vue')
  },
  {
    path: '/board',
    name: 'Board',
    component: ()=> import('@/views/Board.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: ()=> import('@/views/About.vue')
  },
  {
    path: '*',
    component: ()=> import('@/views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
