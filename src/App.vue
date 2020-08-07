
<!-- 页面的最高配置 -->

<template>
  <div id="app" @click="showPop($event)">
    <!-- 点击泡泡与泡泡实现 -->
    <div id="masking-out" v-if="display"></div>
    <!-- 外围蒙版 -->
    <div id="pop" ref="pop"></div>
    <!-- 实体标签，选择缓存views组件 -->
    <keep-alive include="views">
      <router-view/>
    </keep-alive>
     <nav>
       <!-- replace插路径，点击切换tab-bar-item的小图标 -->
       <tab-bar-item path="/tree" replace>
         <img slot="tab-bar-icon" src="./assets/img/tabImg/g0.png" alt="结构树">
         <img slot="tab-bar-icon-active" src="./assets/img/tabImg/g1.png" alt="结构树">
         <div slot="tab-bar-text">过滤</div>
       </tab-bar-item>
       <tab-bar-item path="/views" replace>
         <img slot="tab-bar-icon" src="./assets/img/tabImg/x0.png" alt="搜索项">
         <img slot="tab-bar-icon-active" src="./assets/img/tabImg/x1.png" alt="搜索项">
         <div slot="tab-bar-text">序列</div>
       </tab-bar-item>
       <tab-bar-item path="/datas" replace>
         <img slot="tab-bar-icon" src="./assets/img/tabImg/d0.png" alt="数据页">
         <img slot="tab-bar-icon-active" src="./assets/img/tabImg/d1.png" alt="数据页">
         <div slot="tab-bar-text">数据</div>
       </tab-bar-item>
       <tab-bar-item path="/setting" replace>
         <img slot="tab-bar-icon" src="./assets/img/tabImg/s0.png" alt="设置区">
         <img slot="tab-bar-icon-active" src="./assets/img/tabImg/s1.png" alt="设置区">
         <div slot="tab-bar-text">设置</div>
       </tab-bar-item>
      </nav>
  </div>
</template>
<script>

import tabBarItem from "./components/tabBar/tabBarItem"
//底部路由按钮实现

export default {
  name:'App',
  components:{
    tabBarItem
  },
  data(){
    return{
      display: false
    }
  },
  methods:{
    showPop(event){ 
      //点击产生泡泡  
      var pop = this.$refs.pop
      pop.style.left = (event.clientX - 12) + 'px'
      //暂时未解构，后面宽度与时间间隔会写作变量，并入setting路由
      pop.style.top = (event.clientY - 12) + 'px'
      pop.style.display="block"
      setTimeout(()=>{
        pop.style.display = "none"
      },200)
    },
  } 
}
</script>

<style>
 @import "./assets/css/main.css";
 /* 导入的全局样式 */ 
</style>
