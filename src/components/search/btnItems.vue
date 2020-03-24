<template>
  <div id="btnItem">
      <slot name="itemP"></slot>    
  </div>
</template>

<script>
export default {
  name: 'btnItems',
  data() {
    return {
    };
  },
  methods:{
    
  }
}
</script>

<style scoped>
#btnItem p{
  width: 15%;
  height: 33px;
  font-size: 10px;
  line-height: 33px;
  margin-left: 1.4%;
  margin-top: 5px;
  color: #DB4137;
  background: rgba(255,255,255,0.8);
  float: left;
  position: relative;
  z-index: 66;
  user-select: none;
  text-overflow: clip;
  transition: all ease 0.2s;
}
#btnItem p:active{
  transform: scale(1.2)
}
</style>
