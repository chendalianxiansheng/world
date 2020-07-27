<template>
<div id="exp">
  <div id="exp-top"></div>
</div>
</template>

<script>
export default {
  name: 'explain',
  data() {
    return {
      
    };
  },
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
  background: rgba(0, 0, 0, 0.5);
}
#div-top{
  width: 100%;
  height: 20%;
  background: #db4137;
}
</style>
