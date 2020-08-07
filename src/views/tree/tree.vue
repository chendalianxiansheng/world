
<!-- Tree路由，负责展示时间线 -->

<template>
  <div id="tree" @click="run">
    <tree-top></tree-top>
    <div id="tree-content">
      <el-timeline>
        <el-timeline-item v-for="(item, index) in timeline"
        placement="top"
        :key="index"
        :color="item.color"
        :timestamp="item.timestamp"
        >
          <img :src="item.src" alt="">
          <img :src="item.src1" alt="">
          <h5>{{item.name}}</h5>
          <h6>{{item.place}}</h6>
          <p>{{item.content}}</p>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>
<script>

import treeTop from '../../components/tree/treeTop'
import { timeline } from './timeline'

export default {
  name:'tree',
  components:{
    treeTop
  },
  data(){
    return {
      timeline
    }
  },
  computed:{
    result(){
    }
  },
  methods:{
    run(){
      
    }
  }
}
</script>


<style> 
#tree{ 
  /* 路由本页样式 */
  width: 100%;
  height: auto;
  background: whitesmoke;
  /* background: url('../../assets/img/viewImg/AJBG.png'); */
}

.el-timeline{
  /* 时间线板块样式 */
  padding: 50px 15px;
  background: whitesmoke;
  color: white;
  text-align: left;
  margin-left: 15%;
  transition: 1s all ease;
}
.el-timeline:hover{
  color: red;
}
.el-timeline p{
  /* 历史事件介绍文字 */
  color: gray;
  font-size: 12px;
  cursor: pointer;
  padding: 3px 0px;
  /* padding-bottom: 10px; */
}
.el-timeline p:hover{
  color: #db4137;
  font-weight: 700;
}
.el-timeline img{
  /* 历史事件国旗样式 */
  height: 45px;
  vertical-align: middle;
}
.el-timeline img:nth-child(2n){
  /* 历史事件第二个国旗样式 */
  margin-left: 10px;
}
.el-timeline h6{
  /* */
  font-weight: 700;
  font-size: 10px;
  padding: 5px 0;
  margin: 0;
}
.el-timeline h5{
  padding: 5px 0 0 0;
  margin: 0;
  color: red;
}
</style>