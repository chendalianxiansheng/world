
<!-- 设置页 - 暂定 -->

<template>
  <div>
    <h1 @click="idx=0" :class="{font:true}">设置页</h1>
    <h1 @click="idx=1" :class="{font:true}">其他页</h1>
  </div>
</template>

<script>
export default {
  name: 'setting',
  data() {
    return {
      idx:0
    };
  },
  methods:{
    
  }
}
</script>

<style scoped>
.font{
  color: red;
}
</style>
