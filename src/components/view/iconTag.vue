<template>
  <div id="line-b">
    <slot name="item-p1"></slot>
    <slot name="item-people"></slot>
    <slot name="item-money"></slot>
    <slot name="item-p2"></slot>
  </div>
</template>

<script>
export default {
  name:'icon-tag'
}
</script>

<style>
#line-b{
  width: 100%;
  height: 20px;
  position: relative;
  height: 12px;
}

#line-b img{
  margin-top: 2px;
  width: 12px;
  position: absolute;
}
#line-b p{
  font-size: 9px;
  line-height: 15px;
  width: 35%;
  float: left;
  margin-left: 15%;
  white-space: nowrap;
  text-align: start;
}

#line-b img:first-child{
  position: absolute;
  left: 6%;
}
#line-b img:last-child{
  position: absolute;
  left: 55%;
}
</style>