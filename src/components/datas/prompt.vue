<template>
<div id="prompt">
  <div id="prompt-tab">
    <img src="../../../public/img/bg/way.png" alt="">
    <div id="prompt-items">
      <div 
      v-for="(item, idx) of people"
      :key="idx"
      :class="{'items-active': curIdx === idx}"
      @click="curIdx = idx"
      >
        {{item}}
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'prompt',
  data() {
    return {
      curIdx: 0,
      people: ['黄种人','白种人','黑人','混血']
    };
  },
}
</script>

<style scoped>
#prompt{
  /* */
  width: 60%;
  height: 460px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  z-index: 4444;
  background: white;
  box-shadow: 5px 5px 3px rgba(0, 0, 0, 0.1);
}
#prompt-tab{
  width: 100%;
  height: 35px;
}
#prompt-tab>img{
  width: 85%;
  margin-top: 10px;
}
#prompt-items{
  width: 94%;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  margin: 4px calc(3% - 1px);
  border: 1px solid #db4137;
}
#prompt-items>div{
  flex: 1;
  color: #db4137;
}
#prompt-items .items-active{
  height: 22px;
  line-height: 22px;
  background: #db4137;
  color: white;
}
</style>
