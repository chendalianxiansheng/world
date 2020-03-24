<template>
  <div id="datasDiv">
    <div id="datasTop">
      <div id="backTo" @click="back()">返回 ➤</div>
      <span id="name1">{{item.name}}</span>
    </div>
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
    <div id="map"></div>
    <div id="chart1"></div>
  
  </div>
</template>

<script>
import echarts from 'echarts'

export default {
  name: 'datas',
  data() {
    return {
      item:[]
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
  beforeMount(){
    this.item = this.$store.state.items
  },
  mounted(){
    this.$router.afterEach((to, from) => {
    window.scrollTo(0, 0) 
    })
    this.drawTab1();
  },
  methods:{
    back(){
      history.back(-1)
    },
    drawTab1(){
      let chart = this.$echarts.init(document.getElementById('chart1'))
      chart.setOption({
        // color:'#87cefa',
        title:{
          // text: '波兰',
          // backgroundColor: "orange",
          // subtext: 3840,       
        },
        tooltip: {},
          
        xAxis: {
          data: ["挪威","波兰","韩国","希腊","当前"],
          // axisLabel: {  
          //   interval:0,  
          //   rotate: 20  
          // }  
        },
        yAxis: {
          axisLabel: {  
            interval:0,  
            rotate: 55  
          }  
        },
        series: [{
          name: '人口/万',
          type: 'bar',
          data: [529, 3840, 5164, 1073, {value: this.item.people/10000,itemStyle:{ normal:{color:"#62bfe0"}}}]
        }]
      });  //图表实例尾括号
    }     //绘制函数尾括号
  }      //methods尾括号
}       //vue实例尾括号
</script>

<style scoped>
#datasDiv{
  width: 100%;
  height: 100%;
  background: whitesmoke;
}
#datasTop{
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 13px;
  float: left;
  position: fixed;
  z-index: 999;
  background: white;
}
#backTo{
  position: absolute;
  float: left;
  margin-left: 3%;
}
#name1{
  text-align: center;
}
#datasInfo{
  position: relative;
  width: 100%;
  height: 355px;
}
#badges{
  position: absolute;
  width: 55%;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
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
#datasP p:nth-child(2n+1){
  color: #db4137;

}
#map{
  width: 100%;
  height: 300px;
  background: gold;
}
/* #datasP p:nth-child(2n){
  text-decoration:dotted;
} */
#chart1{
  position:relative;
  top: -40px;
  width: 96%;
  padding-left: 2%;
  height: 280px;
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
