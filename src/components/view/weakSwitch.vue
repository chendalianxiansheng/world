
<!-- sideBar中强弱关联的开关按钮 -->

<template>
<div id="ws">
  <p id="ws-p">{{weak?'强关联':'弱关联'}}</p>

  <el-switch
  @click.native="sendWeak()"
  id="ws-switch"
  v-model="weak"
  active-color="#db4137"
  inactive-color="#13ce66">
  </el-switch>
  
  
  <div id="ws-info">
    <img v-if="weak" src="../../assets/img/viewImg/strong.png" alt="">
    <img v-else src="../../assets/img/viewImg/weak.png" alt="">
    {{weak?'搜索结果将包含所有与该国家相关的 地区/州省/组织和历史政权':'搜索结果将只展示匹配内容，只有符合条件的其他选项可以被过滤'}}
    <p>{{weak?'搜索中国时展示香港等特区':'搜索中国时不展示其他内容'}}</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'weakSwitch',
  data() {
    return {
      weak: false
    };
  },
  methods: {
    sendWeak(weak){
      this.$emit('sendWeak',this.weak)
    }
  }
}
</script>

<style scoped>
#ws{
  /* 功能空间位置 */
  width: 90%;
  margin-left: 5%;
  /* margin-top: 5px; */
}
#ws-p{
  /* 顶部文字说明 */
  line-height: 33px;
  font-size: 15px;
  text-align: start;
  float: left;
}
#ws .el-switch{
  /* 开关插件 */
  float: left;
  margin: 5px;
}
#ws img{
  /* 插件内仅有的图标 */
  height: 23px;
  float: left;
  margin-top: 7px;
  padding-right: 5px;
  vertical-align: top;
}
#ws>#ws-info{
  /* 主要文字区的内容实现 */
  width: 90%;
  height: auto;
  font-size: 11px;
  padding: 7px 10px;
  border-radius: 3px;
  background: rgb(230,230,230);
  clear: both;
}
#ws>#ws-info>p{
  /* 底部小红字 */
  color: var(--main);
  margin-top: 5px;
  font-weight: 700;
  text-align: end;
}
</style>
