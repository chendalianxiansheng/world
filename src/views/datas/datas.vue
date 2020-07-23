<template>
  <div id="datasDiv">
    <!-- 顶端数据行 -->
    <div id="datasTop">
      <div id="backTo" @click="back()">返回 ➤ </div>
      <span id="name1">{{item.name}}</span>
      
    </div>
  <!-- 内容数据块1 -->
    <div id="datasInfo">
      <transition name="rotateBadge" appear tag="div">
        <img id="badges" :src="item.badge" alt="">
      </transition>
      <transition name="fadeFlag" appear>
      <div id="datasContent">
        <p id="datas-p1">{{item.ename}}</p>
        <img id="flags" :src="item.flag" alt="">
        <div id="datasP">
          <p>国名：{{item.name}}</p>
          <p>首都：{{item.city}}</p>
          <p>大洲：{{item.land}}</p>
          <p>地区：{{item.place}}</p>
          <p>类型：{{item.type | typeName}}</p>
          <p>人口：{{item.people | numb}}人</p>
          <p>面积：{{item.area | numb}}平方千米</p>
          <p>人均：{{item.per}}美元</p>
          <p>年产总值：{{item.gdp}}亿美元</p>
          <p>建国时间：{{item.time}}年</p>
          <p>全名：{{item.fullname}}</p>
        </div>
      </div>
      </transition>
    </div>
    <!-- 内容数据块2 echarts 民族构成模板 -->
    <div id="chart1"></div>
    <div id="map"></div>
    <div id="bottom"></div>
  </div>
</template>

<script>
import { drawTab1 } from './drawTab1'

export default {
  name: 'datas',
  data() {
    return {
      item: [],
      merge: ''
    };
  },
  filters:{
    numb(data){     //文字过滤器
      if(data>10000 && data<100000000){
        return data/10000+'万'
      }else if(data>100000000){
        return data/100000000+'亿'
       }else{
        return data
      }
    },
    typeName(data){
      if(data==1){
        return '国家'
      }else if(data==2){
        return '地区'
      }else if(data==3){
        return '州省'
      }else if(data==4){
        return '组织'
      }else{
        return '历史'
      }
    },
  },
  created(){ 
    this.item = this.$store.state.items  
  },
  beforeMount(){
    this.merge = this.item.partvalue.map((value,idx) => ({value, name: this.item.part[idx]}));
    this.$nextTick(()=>{
      this.drawTab1();
    })
  },
  mounted(){
    // this.$router.afterEach((to, from) => {
    window.scrollTo(0, 0) 
    // this.drawTab2();
  },
  methods:{
    back(){
      this.$router.replace('/views')
    },
    drawTab1
  }      //methods尾括号
}       //vue实例尾括号
</script>

<style scoped>
/* 整个data的样式 */
#datasDiv{
  width: 100%;
  height: 100%;
  background: whitesmoke;
}
/* 顶部功能行 */
#datasTop{
  width: 100%;
  height: 35px;
  line-height: 35px;
  font-size: 13px;
  float: left;
  position: fixed;
  z-index: 9999;
  background: white;
}
/* 左上角回退按钮 */
#backTo{
  position: absolute;
  float: left;
  margin-left: 3%;
  cursor: pointer;
}
/* 顶端国家名称 */
#name1{
  text-align: center;
}
/* 顶部模块1 数据模块 */
#datasInfo{
  position: relative;
  width: 100%;
  height: 355px;
}
/* 右侧国徽样式 */
#badges{
  position: absolute;
  width: 54vmin;
  right: 2%;
  top: 0;
  bottom: 0;
  margin: auto;
}
/* 数据模块1的所有左侧数据 */ 
#datasContent{
  float: left;
  margin-left: 2%;
}
#datasContent #datas-p1{
  font-size: 18px;
  padding-top: 40px;
  font-weight: 700;
  color: #ccc;
  text-align: start;
}
#datasContent #datas-p1::first-letter{
  font-size: 23px;
  color: #db4137;
}
#flags{
  height: 80px;
  float: left;
  border: 1px solid rgb(173, 173, 173);
}
#datasP{
  clear: both;
  padding-top: 5px;
  text-align: start;
  line-height: 18px;
  font-size: 10px;
  font-weight: 700;
}
/* 单数数据为红色字体 */
#datasP p:nth-child(2n+1){
  color: #db4137;
}
#chart1{
  width: 100%;
  height: 260px;
  padding-top: 15px;
  background: lightsalmon;
  /* background-image: url("../../../public/img/bg/bg1.png");
  background-size: 120% 270px; */
}
#map{
  width: 100%;
  height: 300px;
  background: lightgreen;
}
#bottom{
  width: 100%;
  height: 500px;
  background: gold;
}
.fadeFlag-enter,.fadeFlag-leave-to{
  transform: translateX(-100%);
}
.fadeFlag-enter-active,.fadeFlag-leave-active{
  transition: all ease 0.5s;
}
.rotateBadge-enter,.rotateBadge-leave-to{
  transform: translateX(100%)
}
.rotateBadge-enter-active,.rotateBadge-leave-active{
  transition: all ease 0.5s;
}
</style>
