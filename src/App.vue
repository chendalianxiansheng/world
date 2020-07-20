<template>
  <div id="app">
    <keep-alive include="views">
      <router-view></router-view>
    </keep-alive>
     <tab-bar>
       <tab-bar-item path="/tree" replace>
         <img slot="tab-bar-icon" src="./assets/img/tabImg/g0.png" alt="">
         <img slot="tab-bar-icon-active" src="./assets/img/tabImg/g1.png" alt="">
         <div slot="tab-bar-text">过滤</div>
       </tab-bar-item>
       <tab-bar-item path="/views" replace>
         <img slot="tab-bar-icon" src="./assets/img/tabImg/x0.png" alt="">
         <img slot="tab-bar-icon-active" src="./assets/img/tabImg/x1.png" alt="">
         <div slot="tab-bar-text">序列</div>
       </tab-bar-item>
       <tab-bar-item path="/datas" replace>
         <img slot="tab-bar-icon" src="./assets/img/tabImg/d0.png" alt="">
         <img slot="tab-bar-icon-active" src="./assets/img/tabImg/d1.png" alt="">
         <div slot="tab-bar-text">数据</div>
       </tab-bar-item>
       <tab-bar-item path="/setting" replace>
         <img slot="tab-bar-icon" src="./assets/img/tabImg/s0.png" alt="">
         <img slot="tab-bar-icon-active" src="./assets/img/tabImg/s1.png" alt="">
         <div slot="tab-bar-text">设置</div>
       </tab-bar-item>
     </tab-bar>
  </div>
</template>
<script>
import tabBar from "./components/tabBar/tabBar"
import tabBarItem from "./components/tabBar/tabBarItem"

export default {
  name:'App',
  components:{
    tabBar,
    tabBarItem
  },
  data(){
    return{
      
    }
  } 
}
</script>

<style>
 @import "./assets/css/main.css";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
input[type="text"]{  
  outline-style: none;
  border: 1px solid Gainsboro; 
  border-radius: 20px;  
  height: 25px;
  line-height: 25px;
}
input[type="text"]:focus{   
  border-color: #DB4137;  
  outline: 0; 
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 10px rgba(219,65,55,.6)
}
</style>
