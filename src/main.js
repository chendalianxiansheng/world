import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueLazyload from 'vue-lazyload'
import echarts from 'echarts'
import elementUI from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts

Vue.use(elementUI)
Vue.use(vueLazyload, {
  preLoad: 2,
  error: 'public/img/other/error.png',
  loading: 'public/img/other/loading.png',
  attempt: 3,
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
