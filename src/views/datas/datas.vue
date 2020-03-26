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
    <!-- <div id="map"></div> -->
    <div id="chart2"></div>
    <div id="chart1"></div>
    <div id="bottom" @click="show"></div>
  </div>
</template>

<script>
// import echarts from 'echarts'

export default {
  name: 'datas',
  data() {
    return {
      item: [],
      merge: []
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
    this.merge = this.item.partValue.map((value,idx) => ({value, name: this.item.part[idx]}));
  },
  mounted(){
    this.$router.afterEach((to, from) => {
    window.scrollTo(0, 0) 
    })
    this.drawTab1();
    this.drawTab2();
  },
  // computed:{
  //   merge(){
  //     return this.item.partValue.map((value,idx) => ({value, name: this.item.part[idx]}));
  //   }
  // },
  methods:{
    show(){
      console.log(this.merge)
    },
    back(){
      history.back(-1)
    },
    drawTab2(){
      let chart = this.$echarts.init(document.getElementById('chart2'))
      chart.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} {c}%',
        },
        legend: {
          orient: 'vertical',
          left: 10,
          data: this.item.part
        },
        series: [
          {
            name: '人口结构',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '23',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            // data: [
            //     {value: 60.48, name: '哈萨克族'},
            //     {value: 20.61, name: '俄罗斯人'},
            //     {value: 12.91, name: '其他族群'},
            // ]
            data: this.merge
          }
        ]
      })
    },
    drawTab1(){
      let chart = this.$echarts.init(document.getElementById('chart1'))
      chart.setOption({
        title:{
          padding: 10,
          subtext:'人均收入/美元（GDP）',
          subtextStyle:{
            fontSize: 16,
            color: "rgb(54,54,54)" 
          },
          x:'center'      
        },
        
        tooltip: {},   
        xAxis: {
          data: ["美国","印度","中国","伊朗","沙特","当前"],
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
          name: '人均/美元',
          type: 'bar',
          
          data: [59532, 2016, 9771, 5415, 23219, {value: this.item.per,itemStyle:{ normal:{color:"#62bfe0"}}}]
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
  height: 35px;
  line-height: 35px;
  font-size: 13px;
  float: left;
  position: fixed;
  z-index: 9999;
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
  width: 54%;
  right: 1%;
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
  width: 97%;
  padding-left: 3%;
  height: 280px;
  /* background: rgb(157, 238, 157); */
}
#chart2{
  width: 100%;
  height: 260px;
  padding-top: 15px;
  /* background: lightsalmon; */
  /* background-image: url("../../../public/img/bg/bg1.png");
  background-size: 120% 270px; */
}

#bottom{
  width: 100%;
  height: 500px;
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
