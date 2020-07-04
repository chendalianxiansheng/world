<template>
  <div id="line-b">
    <div class="line-left">
      <slot name="item-img1"></slot>
      <slot name="item-p1"></slot>   
    </div>
    <div class="line-right">
      <slot name="item-img2"></slot>
      <slot name="item-p2"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:'icon-tag'
}
</script>

<style>
#line-b{
  width: 98%;
  height: 17px;
  margin-left: 2%;
  line-height: 17px;
  display: flex;
}
#line-b>.line-left,#line-b>.line-right{
  flex: 0.5;
  text-align: start;
  font-size: 9px;
}
#line-b img{
  display: inline-block;
  width: 12px;
}
#line-b p{
  display: inline;
  font-size: 9px;
}

/* #line-b{
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
} */
</style>