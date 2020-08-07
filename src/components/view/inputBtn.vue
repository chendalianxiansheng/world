
<!-- Views路由顶部菜单栏的插槽实现 -->

<template>
  <div id="ipt-btn">
    <slot name="ipt-btn-out">
      <slot name="ipt-btn-icon"></slot>
      <slot name="ipt-btn-icon-active"></slot>
      <div>
        <slot name="ipt-btn-text"></slot> 
      </div>
    </slot> 
  </div>
</template>

<script>
export default {
  name: 'inputBtn',
  data() {
    return {
    }
  }
}
</script>

<style scoped>
#ipt-btn{
  font-size: 8px;
  flex: 0.11;
  user-select: none;
}
#ipt-btn p{
  margin-top: -1px;
  color: #AEAAAA;
}
#ipt-btn img{
  width: 18px;
  margin-top: 4px;
  vertical-align: middle;
}
</style>
