
<!-- Tree路由的侧边功能栏实现 -->

<template>
  <div id="tree-top" @click="sendArr">
    <div @click="cvlz=!cvlz" :style="{background:cvlz?'white':'#db4137'}">
      <img v-if="cvlz" src="../../../src/assets/img/viewImg/fire1.png" alt="">
      <img v-else src="../../../src/assets/img/viewImg/fire0.png" alt="">
      <p :style="{color:cvlz?'#db4137':'white'}">文明线</p>
    </div>
    
    <div @click="war=!war" :style="{background:war?'white':'#db4137'}">
      <img v-if="war" src="../../../src/assets/img/viewImg/war1.png" alt="">
      <img v-else src="../../../src/assets/img/viewImg/war0.png" alt="">
      <p :style="{color:war?'#db4137':'white'}">战争线</p>
    </div>

    <div @click="tech=!tech" :style="{background:tech?'white':'#db4137'}">
      <img v-if="tech" src="../../../src/assets/img/viewImg/tech1.png" alt="">
      <img v-else src="../../../src/assets/img/viewImg/tech0.png" alt="">
      <p :style="{color:tech?'#db4137':'white'}">科技线</p>
    </div>

    <div @click="nature=!nature" :style="{background:nature?'white':'#db4137'}">
      <img v-if="nature" src="../../../src/assets/img/viewImg/nature1.png" alt="">
      <img v-else src="../../../src/assets/img/viewImg/nature0.png" alt="">
      <p :style="{color:nature?'#db4137':'white'}">自然线</p>
    </div>

    <div @click="person=!person" :style="{background:person?'white':'#db4137'}">
      <img v-if="person" src="../../../src/assets/img/viewImg/person1.png" alt="">
      <img v-else src="../../../src/assets/img/viewImg/person0.png" alt="">
      <p :style="{color:person?'#db4137':'white'}">人物线</p>
    </div>
  </div> 
</template>

<script>
export default {
  name: 'treeTop',
  data() {
    return {
      war: true,
      cvlz: true,
      tech: true,
      nature: true,
      person: true,
    };
  },
  methods:{
    sendArr(){
      this.$emit('sendClick')
    }
  }
}
</script>

<style scoped>
#tree-top{
  position: fixed;
  top: calc(50% - 50px);
  left: 0;
  transform: translateY(-50%);
}
#tree-top>div{
  width: 40px;
  height: 40px;
  margin: 22px 0px;
  cursor: pointer;
  user-select: none;
}
#tree-top img{
  width: 22px;
  height: 22px;
  margin-top: 2px;
}
#tree-top p{
  font-size: 8px;
  line-height: 14px;
}
</style>
