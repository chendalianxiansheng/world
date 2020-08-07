
//Vuex配置页

import Vue from 'vue'
import Vuex from 'vuex'
import { flags } from './flags'   //导入资料数据
import { attr } from './attr'     //导入侧边栏国家分类
import { buttons } from './buttons'   //导入旗帜特征过滤项

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    flags,
    attr,
    buttons,
    time:2000,
    popWidth: 24,
    // ↓ 默认的data展示页，默认为中国
    items: {
      id: 108,
      type: 1,
      name: '中国',
      fullname: '中华人民共和国',
      ename: 'China',
      city: '北京',
      people: 1400000000,
      land: '亚洲',
      area: 9600000,
      time: 1949,
      gdp: 136100,
      per: 9771,
      attr: '中非',
      code: "红黄多1",
      place: '东亚',
      flag: require('../../public/img/flag/ZG.png'),
      badge: require('../../public/img/badge/ZG1.png'),
      lang: ['汉语'],
      partvalue: [91.5, 8.5],
      part: ['汉族','少数民族'],
      belief: []
    }
  },
  mutations: {
    //实现数据的排序方式
    sortMethod(state,key){    
      state.flags.sort((a,b)=>{
        var a = a[key]
        var b = b[key]
        if(key=='ename'){
          return a.localeCompare(b)
        }else{
          return b-a
        }
      })
    },
    //实现数据的倒序
    reverseItem(state){  
      state.flags.reverse()
    },
    //实现过滤项的全部清除
    clearTag(state){
      state.buttons.forEach(item=>item.state=false)
    }
  },
  getters: {
  },
  actions: {
    
  },
  modules: {
  }
})
