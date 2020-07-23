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
    sendkey(msg,e){
      this.$emit('sendkey',msg,e.target.innerHTML)
    },
    sendImg(idx){
      this.$emit('sendImg',idx,'type'+idx)
    },
    cancelkey(msg,e){
      this.$emit('cancelkey',msg,e.target.innerHTML)
    },
    sendTag(){
      this.$emit('sendTag')
    },
    init(){
      this.pics.forEach(item=>item.state=false)
      this.pics[0].state = true
    },
    sendInit(){
      this.$emit('sendInit')
    }
  },
}
</script>

<style>
#Bar-top{
  width: 60vw;
  position: fixed;
  top: 36px;
  right: 0;
  z-index: 99;
  overflow-y: scroll;
  overflow-x: hidden;
  background: whitesmoke;
  border-top: #EAEEEE solid 2px;
  max-height: 100vh;
  user-select: none;
}
#tags{
  width: 50%;
  height: 60%;
  background: white;
  position: fixed;
  z-index: 99;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
#clearTag{
  width: 48px;
  height: 30px;
  position: absolute;
  line-height: 35px;
  font-size: 12px;
  top: -5px;
  right: 15px;
  color: white;
  box-shadow: 1px 1px 3px rgba(0,0,0,0.5);
  background-size: 40px;
  transition: all ease 0.1s;
  background-image: url("../../../public/img/bg/tag.png");
} 
#clearTag:active{
  color: black;
}
.choose{
  background: #DB4137 !important;
  color: white !important;
}
.color1{
  border: 1px solid black !important;
  box-shadow: 1px 1px 3px rgba(0,0,0,0.5);
}
.color2{
  color: black !important;
}
#top-p{
  font-size: 24px;
  text-align: start;
  margin-top: 5%;
  margin-left: 3%;
  color: #db4137;
  line-height: 16px;
}
#switch{
  height: 17px;
  padding-left: 3px;
  margin-top: -5px;
}
#switch:active{
  transform: scale(1.2);
}
#type{   /* 检索设置的标签 */
  width: 100%;
  height: 48px;
  margin-left: 5%;
}
.typeTag{   /* 单个div */
  width: 33px;
  height: 50px;
  float: left;
}
.picsItem{
  width: 22px;
  /* border-radius: 50%; */
  margin-top: 15px;
  position: relative;
  border: 1px solid whitesmoke;
  transition: all ease 0.3s;
  float: left;
}

.picsTag{
  font-size: 9px;
  width: 24px;
  height: 15px;
  float: left;
  line-height: 15px;
  margin-top: -13px;
  color: #AEAAAA;
  text-align: center;
}
.itemsIcon{
  font-size: 13px;
  line-height: 13px;
  float: left;
  position: relative;
  left: -3px;
  top: -30px;
  transition: all ease 0.2s;
}
#top-info{
  margin-top: 3px;
  padding: 3%;
  font-size: 10px;
  text-align: start;
  text-indent: 2em;
  color: #3c3c3c;
}
#top-btn{
  width: 100%;
  height: 26px;
}
#top-btn{
  text-align: start;
  margin-left: 2%;
}
.top-btn{
  padding: 4px 9px;
  border: 1px solid #DB4137;
  border-radius: 1px;
  margin-left: 1%;
  font-size: 12px;
  color: #DB4137;
  background: whitesmoke;
}

#content-p img{
  width: 94%;
  border: 1px solid whitesmoke;
  margin-top:3px;
}

#content-p p{
  width: 90%;
  padding: 2%;
  font-size: 10px;
  display: inline-block;
  text-indent: 2em;
  border: 1px solid black;
  border-top: 0;
  position: relative;
  top: -2px;
  text-align: start;
  background: white;
}
#bar-bottom{
  height: 92px;
  background: whitesmoke;
}
</style>