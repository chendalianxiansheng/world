<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tabBar',
  data() {
    return {
      
    };
  },
}
</script>

<style scoped>
#tab-bar{
  display: flex;
  background: #da493e;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 50px;
  z-index: 99;
}
</style>
