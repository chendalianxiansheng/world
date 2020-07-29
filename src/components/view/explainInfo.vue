<template>
  <div>
    <p class="explain-p">{{ explain }}</p>
    <p class="explain-p">{{ design }}</p>
  </div>
</template>

<script>
export default {
  name: 'explainInfo',
  data() {
    return {
      explain: "本功能为个人开发个人使用，包含数据可能不精确，仅供参考，且不建议引用。主要信息取材于百度与维基百科。部分经济资料来源于快易数据，主要为2018年（约2%内容为其他年份）",
      design: "页面布局与图标/图案设计全部为个人ps制作，其中国旗和国徽图像多数来自维基百科，此处已进行压缩处理，大小约10~200kb"
    };
  },
}
</script>

<style scoped>
.explain-p{
  font-size: 10px;
  color: rgb( 10, 10, 10);
  padding: 10px 5%;
  text-align: start;
  text-indent: 2em;
}
.explain-p:nth-child(2){
  color: #db4137;
}
</style>
