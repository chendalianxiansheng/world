<template>
  <div id="tree">
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

export default {
  name:'tree',
  components:{
    treeTop
  },
  data(){
    return {
      timeline:[{
          timestamp: 'BC 3500年',
          name:'苏美尔文明',
          place: '今 伊拉克 美索不达米亚平原',
          content: '苏美尔人在 两河流域（幼发拉底河与底格里斯河）建立了聚居的城邦，同时期产生了楔形文字，第一代人类文明诞生',
          type: 'cvlz',
          color: 'red',
          src: require('../../../public/img/flag/YLK.png'),
        },
        {
          timestamp: 'BC 3100年',
          name:'古埃及文明',
          place: '今 埃及 开罗',
          content: '由 纳尔迈 Nermer（又称美尼斯）统一上下埃及建立了古埃及第一王朝，都城位于 孟菲斯。早王朝时期开始',
          type: 'cvlz',
          color: 'red',
          src: require('../../../public/img/flag/AJ.png'),
        },
        {
          timestamp: 'BC 2900年',
          name:'苏美尔文明',
          place: '今 伊拉克 美索不达米亚平原',
          content: '苏美尔文明进入城邦争霸阶段',
          type: 'war',
          color: 'red',
          src: require('../../../public/img/flag/YLK.png'),
        },
        {
          timestamp: 'BC 2070年',
          country: '中国文明',
          place: '今 中国 黄河流域',
          content: '大禹之子 启，建立夏朝（存疑）',
          type: 'tech',
          color: 'red',
          src: require('../../../public/img/flag/ZG.png'),
        },
        
        
        
        
        
        
        {
          timestamp: '年',
          place: '',
          content: '',
          type: 'politics',
          color: 'red',
          src: require('../../../public/img/flag/YLK.png'),
        },
      ]
    }
  },
  computed:{
    result(){
    }
  }
}
</script>


<style> 
#tree{
  width: 100%;
  height: auto;
  background: lightgreen;
  /* background: url('../../assets/img/viewImg/AJBG.png'); */
}

.el-timeline{
  padding: 80px 15px;
  background: white;
  color: white;
  text-align: left;
  margin-left: 20%;
}
.el-timeline p{
  color: gray;
  font-size: 12px;
  padding: 3px 0px;
  /* padding-bottom: 10px; */
}
.el-timeline img{
  height: 45px;
  vertical-align: middle;
}
.el-timeline img:nth-child(2n){
  margin-left: 10px;
}
.el-timeline h6{
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