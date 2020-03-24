import Vue from 'vue'
import VueRouter from 'vue-router'
const views = () =>import('../views/view/views')
const datas = () =>import('../views/datas/datas')
const search = () =>import('../views/search/search')
const setting = () =>import('../views/setting/setting')


Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/views'
  },
  {
    path:'/views',
    component: views
  },
  {
    path:'/datas',
    component: datas
  },
  {
    path:'/search',
    component: search
  },
  {
    path:'/setting',
    component: setting
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
