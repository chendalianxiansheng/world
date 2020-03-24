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
  },
  methods:{
  }
}
</script>

<style scoped>
#ipt-btn{
  font-size: 9px;
  float: left;
  width: 8.1%;
  user-select: none;
}
#ipt-btn p{
  margin-top: -1px;
  color: #AEAAAA;
}
#ipt-btn img{
  width: 19px;
  margin-top: 4px;
  vertical-align: middle;
}
</style>
