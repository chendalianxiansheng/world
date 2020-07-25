import Vue from 'vue'
import VueRouter from 'vue-router'
//全部懒加载导入（旧写法，懒得改了）
const tree = () =>import('@/views/tree/tree')
const views = () =>import('@/views/view/views')
const datas = () =>import('@/views/datas/datas')
const setting = () =>import('@/views/setting/setting')


Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/views'
    //默认主页
  },
  {
    path:'/views',
    component: views
    //views信息概览和定位
  },
  {
    path:'/datas',
    component: datas
    //具体信息展示页面
  },
  {
    path:'/tree',
    component: tree
    //事件树或时间树
  },
  {
    path:'/setting',
    component: setting
    //设置，暂时搁置中，后期会配合$store
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
