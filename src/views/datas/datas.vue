<template>
  <div id="datasDiv">
    <!-- 顶端数据行 -->
    <div id="datasTop">
      <div id="backTo" @click="back()">返回 ➤ </div>
      <span id="name1">♚ {{item.name}}</span>
      <span id="right-type">#类型：{{item.type | typeName}}</span>
    </div>
  <!-- 内容数据块1 -->
    <div id="datasInfo">
      <transition name="rotateBadge" appear tag="div">
        <img id="badges" :src="item.badge" alt="">
      </transition>
      <transition name="fadeFlag" appear>
      <div id="datasContent">
        <p id="datas-p1">{{item.ename}}</p>
        <img id="flags" :src="item.flag" alt="" @dblclick="openFlag()">
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
//工具项
import { drawTab1 } from './drawTab1'
import { numb,typeName } from "@/views/pubFunc/filter"

export default {
  name: 'datas',
  data() {
    return {
      item: [],
      merge: ''
    };
  },
  filters:{
    numb,
    typeName
  },
  created(){ 
    this.item = this.$store.state.items  
  },
  beforeMount(){
    //合并两个数组为对象
    this.merge = this.item.partvalue.map((value,idx) => ({value, name: this.item.part[idx]}));
    //绘制echarts1
    this.$nextTick(()=>{
      this.drawTab1();
    })
  },
  mounted(){
    //加载时将其他页面带入的高度清空
    window.scrollTo(0, 0) 
  },
  methods:{
    back(){
      //点击返回时跳转views路由
      this.$router.replace('/views')
    },
    openFlag(){
      console.log(1)
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
  height: 31px;
  line-height: 31px;
  font-size: 13px;
  float: left;
  position: fixed;
  z-index: 9999;
  background: var(--tag);
  background-size: 50px;
}
/* 左上角回退按钮 */
#backTo{
  position: absolute;
  float: left;
  margin-left: 3%;
  cursor: pointer;
  color: white;
}
/* 顶端国家名称 */
#name1{
  text-align: center;
  font-size: 16px;
  line-height: 34px;
  color: white;
}
#right-type{
  font-size: 26px;
  line-height: 40px;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.15);
  position: absolute;
  right: 0;
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
  top: 36px;
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
