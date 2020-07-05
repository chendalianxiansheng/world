<template>
  <div id="tree">
    <div id="tree-top"></div>
    <div id="tree-content">
      <el-timeline>
        <el-timeline-item v-for="(activity, index) in time"
        placement="top"
        :key="index"
        :color="time.color"
        :timestamp="time.timestamp"
        >
          <img :src="time.src" alt="">
          <img :src="time.src1" alt="">
          <h6>{{time.place}}</h6>
          <p>{{time.content}}</p>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>
<script>


export default {
  name:'tree',
  components:{
  },
  data(){
    return {
      time:[{
          place: '123',
          content: '123',
          timestamp: '年',
          type: '',
          color: '',
          src: require('../../../public/img/flag/BD.png'),
          src1: require('../../../public/img/flag/YDU.png')
        },{
          place: '123',
          content: '123',
          timestamp: '年',
          type: '',
          color: '',
          src: require('../../../public/img/flag/BD.png'),
          src1: require('../../../public/img/flag/YDU.png')
        },
      ]
    }
  }
}
</script>


<style> 
#tree{
  width: 100%;
  height: 100vh;
  background: white;
}
#tree-top{
  width: 100%;
  height: 50px;
}
.el-timeline{
  padding: 20px;
  background: white;
  color: white;
  text-align: left;
  margin-left: 10%;
}
.el-timeline p{
  color: gray;
  padding-bottom: 10px;
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
  padding: 6px 0;
  margin: 0;
}
</style>