
<!-- Views路由侧边栏的实现 -->

<template>
  <div id="Bar-top">
      <p id="top-p">检索设置<img id="switch" src="../../assets/img/viewImg/what.png" alt="" @click="sendTag()"></p>
      
      <div id="clearTag" @click="init(),sendInit()">重置↻</div>

      <div id="type">
        <div class="typeTag" v-for="item in pics" :key="item.id" @click="item.state=!item.state,sendImg(item.id)">
          <img class="picsItem" :src="item.src" :class="{color1:item.state}" alt="" >
          <p class="itemsIcon" :style="{color:item.color}">♚</p>
          <p class="picsTag" :class="{color2:item.state}">{{item.tag}}</p>
        </div>
      </div>
      
      <p id="top-info">选择至少一项用于检索的过滤信息类型，如单选国名时，不再获得包含首都名、地区、所在洲的字符匹配结果。全部取消时只能进行字母搜索</p>
      <div id="top-btn">
        <span class="top-btn" :class="{choose:country}" @click="country=!country,country?sendkey('+item.name',$event):cancelkey('+item.name',$event)">国名</span>
        <span class="top-btn" :class="{choose:city}" @click="city=!city,city?sendkey('+item.city',$event):cancelkey('+item.city',$event)">首都</span>
        <span class="top-btn" :class="{choose:place}" @click="place=!place,place?sendkey('+item.place',$event):cancelkey('+item.place',$event)">地区</span>
        <span class="top-btn" :class="{choose:land}" @click="land=!land,land?sendkey('+item.land',$event):cancelkey('+item.land',$event)">大洲</span>
      </div>
      <slot name="warn"></slot>
      <div id="content-p">
        <slot name="picp">
          <slot name="typeImg"></slot>
          <slot name="typeInfo"></slot>
        </slot>
      </div>
      <div id="bar-bottom"></div>
  </div>
</template>

<script>
export default {
  name:'sideBar',
  data(){
    return{
      country: true,
      city:false,
      place:false,
      land:true,
      tags:false,
      pics:[
        {
          id: 1,
          color: 'orange',
          src:require('../../../public/img/bg/0.png'),
          tag:'国家',
          state: true,
          info:'指具有无可争议的绝对主权，被世界各国所公认的195个联合国成员/观察国'
        },
        {
          id: 2,
          color: 'purple',
          src:require('../../../public/img/bg/1.png'),
          tag:'地区',
          state: false,
          info:'主权归属或合理性存在争议，受到国际广泛认可，但被排除在国家体系之外的政体或地区'
        },
        {
          id: 3,
          color: "rgb(5, 98, 236)",
          src:require('../../../public/img/bg/2.png'),
          tag:'州省',
          state: false,
          info:'属于主权国的一部分，但在历史/地理或政治上具有明显特殊性的地区，如港澳台'
        },
        {
          id: 4,
          color: "green",
          src:require('../../../public/img/bg/3.png'),
          tag:'组织',
          state: false,
          info:'由多个主权国以国家名义组成的联合组织，如欧盟，此处仅收录具有官方旗帜的组织'
        },
        {
          id: 5,
          color: 'black',
          src:require('../../../public/img/bg/4.png'),
          tag:'历史',
          state: false,
          info:'已覆灭政权或国家的旗帜，当旗帜画面发生特别明显的变动，也在可查询之列'
        }
      ]
    }
  },
  methods:{
    //四大按钮（国名/首都/地区/大洲）点击实现
    sendkey(msg,e){
      this.$emit('sendkey',msg,e.target.innerHTML)
    },
    //五种旗帜分类按钮（国家/地区/州省/组织/历史）
    sendImg(idx){
      this.$emit('sendImg',idx,'type'+idx)
    },
    //四大按钮解除事件
    cancelkey(msg,e){
      this.$emit('cancelkey',msg,e.target.innerHTML)
    },
    //标题问号圆圈点击事件
    sendTag(){
      this.$emit('sendTag')
    },
    //tab-bar数据初始化
    init(){
      this.pics.forEach(item=>item.state=false)
      this.pics[0].state = true
    },
    //全局搜索项（views）初始化
    sendInit(){
      this.$emit('sendInit')
    }
  },
}
</script>

<style>
@import '../../assets/css/sideBar.css'
</style>