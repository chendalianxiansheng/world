
<!-- Datas数据页的实现 -->

<template>
  <div id="datasDiv">
    <transition name="prompt1">
    <prompt v-if="prompt"></prompt>
    <!-- 种族介绍弹出框 -->
    </transition>

    <div id="datasTop">
    <!-- 顶端数据行 -->
      <div id="backTo" @click="back()">返回 ➤ </div>
      <span class="title">♚ {{item.name}}</span>
      <span id="right-type" class="shadowFont">#类型：{{item.type | typeName}}</span>
    </div>
 
    <div id="datasInfo">
     <!-- 内容数据块1 -->
      <transition name="rotateBadge" appear tag="div">
        <img 
          id="badges" 
          alt="国家国徽" 
          :src="item.badge" 
          @click="$store.commit('maskSwitch')">
          <!-- 国徽 -->
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
    
    <img 
    src="../../assets/img/viewImg/menu.png" 
    id="ellipsis" 
    alt=""
    @click="prompt=!prompt"
    >
    <!-- 内容数据块2 echarts 民族构成模板 -->
    <div id="chart1"></div>
    <!-- echarts内容1 -->
    <div id="map"></div>
    <div id="bottom"></div>
  </div>
</template>

<script>

//组件
import prompt from '../../components/datas/prompt'

//工具项
import { drawTab1 } from './drawTab1'
import { numb,typeName } from '@/views/pubFunc/filter'

export default {
  name: 'datas',
  components: {
    prompt
  },
  data() {
    return {
      item: [],
      merge: '',
      prompt: false
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
      console.log(1);
    },
    drawTab1
  }      //methods尾括号
}       //vue实例尾括号
</script>

<style scoped>
@import '../../assets/css/datas.css'
</style>
