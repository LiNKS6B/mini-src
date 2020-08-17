import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 站点统计页
const homeRoute = {
  path: 'home',
  component: () => import('@/views/home/Home.vue'),
  meta: {
    menu: 'home'
  }
}

// 上传文件页
const uploadRoute = {
  path: 'upload',
  component: () => import('@/views/upload/UploadPage.vue'),
  meta: {
    menu: 'upload'
  }
}

const routes = [
  {
    path: '/',
    component: () => import('@/views/layout/MainLayout.vue'),
    children: [
      homeRoute,
      uploadRoute,
      { path: '*', redirect: 'home' }
    ]
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes
})

export default router
