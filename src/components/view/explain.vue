
<!-- Views路由的问号点击父组件 -->

<template>
<div id="exp">
  <div id="exp-top" @click="sendExp">数据说明 <span>×</span></div>
  <div id="exp-content">
    <exp-info></exp-info>
    <!-- 该组件为主要内容 -->
  </div>
</div>
</template>

<script>

import expInfo from "./explainInfo"

export default {
  name: 'explain',
  components:{
    expInfo
  },
  data() {
    return {
      
    };
  },
  methods:{
    sendExp(){
      //向上发射指令
      this.$emit('sendExp')
    }
  }
}
</script>

<style scoped>
#exp{
  /* 数据说明div */
  width: 60%;
  height: 460px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  z-index: 6666;
  background: rgba(255, 255, 255);
  box-shadow: 5px 5px 3px rgba(0, 0, 0, 0.1);
}
#exp-top{
  /* 数据说明顶部div */
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: #db4137;
  background-size: 40px;
  color: white;  
  font-size: 16px;
  cursor: pointer;
  user-select: none;
}
</style>
