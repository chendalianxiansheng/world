
<!-- 问号按键，数据说明组件 -->

<template>
<div id="exp">
  <div id="exp-top" @click="sendExp">数据说明 <span>×</span></div>
  <div id="exp-content">
    <img src="" alt=""> 
    <img src="" alt="">
  </div>
</div>
</template>

<script>

export default {
  name: 'explain',
  data() {
    return {
      
    };
  },
  methods:{
    sendExp(){
      this.$emit('sendExp')
    }
  }
}
</script>

<style scoped>
#exp{
  width: 60vmin;
  height: 60%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  z-index: 999;
  background: rgba(255, 255, 255, 0.95);
}
#exp-top{
  width: 100%;
  height: 45px;
  line-height: 45px;
  background: url("../../../public/img/bg/cloud-dark.png");
  background-size: 40px;
  color: white;  
}
</style>
