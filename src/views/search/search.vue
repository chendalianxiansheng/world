<template>
  <div>
    <div id="main">
      <div id="main-line"></div>
    </div>

    <div id="side">
      <div class="topItems" :class="{colorA:state=='gov'}" @click="state='gov'">
        <img v-if="state=='gov'" src="../../../src/assets/img/viewImg/gov0.png" alt="">
        <img v-else src="../../../src/assets/img/viewImg/gov1.png" alt="">
        <p :class="{font:state=='gov'}">政治树</p>
      </div>

      <div class="topItems" :class="{colorA:state=='war'}" @click="state='war'">
        <img v-if="state=='war'" src="../../../src/assets/img/viewImg/war0.png" alt="">
        <img v-else src="../../../src/assets/img/viewImg/war1.png" alt="">
        <p :class="{font:state=='war'}">战争树</p>
      </div>

      <div class="topItems" :class="{colorA:state=='tech'}" @click="state='tech'">
        <img v-if="state=='tech'" src="../../../src/assets/img/viewImg/tech0.png" alt="">
        <img v-else src="../../../src/assets/img/viewImg/tech1.png" alt="">
        <p :class="{font:state=='tech'}">科技树</p>
      </div>

      <div class="topItems" :class="{colorA:state=='mind'}" @click="state='mind'">
        <img v-if="state=='mind'" src="../../../src/assets/img/viewImg/mind0.png" alt="">
        <img v-else src="../../../src/assets/img/viewImg/mind1.png" alt="">
        <p :class="{font:state=='mind'}">思想树</p>
      </div>

      <div class="topItems" :class="{colorA:state=='nat'}" @click="state='nat'">
        <img v-if="state=='nat'" src="../../../src/assets/img/viewImg/nature0.png" alt="">
        <img v-else src="../../../src/assets/img/viewImg/nature1.png" alt="">
        <p :class="{font:state=='nat'}">自然树</p>
      </div>

      <div class="topItems" :class="{colorA:state=='cty'}" @click="state='cty'">
        <img v-if="state=='cty'" src="../../../src/assets/img/viewImg/cty0.png" alt="">
        <img v-else src="../../../src/assets/img/viewImg/cty1.png" alt="">
        <p :class="{font:state=='cty'}">国家树</p>
      </div>
    </div>
  </div>
</template>
<script>


export default {
  name:'search',
  components:{
  },
  data(){
    return {
      state:'war'
    }
  }
}
</script>


<style scoped> 
.font{
  color: white !important;
}
.colorA{
  background: #db4137 !important;
}
#side{
  position: fixed;
  right: 0;
  top: 18%;
  z-index: 999;
}
.topItems{
  width: 45px;
  height: 45px;
  background: white;
  transition: all ease 0.3s;
  margin-top: 5px;
  border: none;
}
.topItems img{
  width: 26px;
  margin-top: 3px;
}
.topItems p{
  font-size: 9px;
  color: #db4137;
}
#main{
  width: 100%;
  height: 100%;
  background: whitesmoke;
}
#main-line{
  width: 2px;
  height: 6000px;
  background: gold;
  margin-left: 50%;
  transform: translateX(-1px);
}
</style>