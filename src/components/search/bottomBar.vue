<template>
    <div id="bottomBar" ref="bottomBar">
      <div id="top" @click="down(),see=!see">
        特征定位
        <img src="../../assets/img/viewImg/arrow.png" alt="" :class="{rotateImg:see}"> 
      </div>
      <div id="info">{{info?info:infor}}</div>
      <div id="icon" @click="chooseType()">
        <slot name="iconImg"></slot>    
      </div>
      <p id="count">收录数量 : {{$store.state.flags.length}}</p>
      <img id="topImg" ref="topImg" src="../../../public/img/bg/tower.png" alt=""  @click="back(),sentBack(),info=''">
      <div id="tags">
        <btnItems>
          <p slot="itemP" class="itemP" v-for="item in tags" :key="item.idx" @click="item.state=!item.state,item.state?info=item.info:'',sendCode(item.code)" :class="{choose:item.state}">{{item.word}}</p> 
        </btnItems> 
        <img src="../../../public/img/bg/gw.png" alt="" id="itemImg"> 
      </div>
    </div>
</template>

<script>
import btnItems from "./btnItems"

export default {
  name: 'bottomBar',
  components:{
    btnItems
  },
  data() {
    return {
      see:false,
      info:'',
      infor:'选择需要被过滤的旗帜特征，如颜色/结构/包含图形/图案等外观属性...',
      tags:[
      {
        idx: 0,
        state:false,
        code:'红',
        word:'红色',
        info:'旗帜具有红色/暗红/棕色 不包含旗帜的复杂图案部分，如中国国旗'
      },
      {
        idx: 1,
        state:false,
        code:'白',
        word:'白色',
        info:'旗帜背景具有白色/灰白/灰色 不包含旗帜的复杂图案部分，如日本国旗'
      },
      {
        idx: 2,
        state:false,
        code:'绿',
        word:'绿色',
        info:'旗帜背景具有绿色/浅绿/墨绿色 不含旗帜的复杂图案部分，如巴西国旗'
      },
      {
        idx: 3,
        state:false,
        code:'蓝',
        word:'蓝色',
        info:'旗帜背景具有深蓝/浅蓝色 不包含旗帜的复杂图案部分，如美国国旗'
      },
      {
        idx: 4,
        state:false,
        code:'黑',
        word:'黑色',
        info:'旗帜背景具有黑色 不包含旗帜的复杂图案或线条部分，如德国国旗'
      },
      {
        idx: 5,
        state:false,
        code:'黄',
        word:'黄/橙色',
        info:'旗帜背景具有黄色/橙色 不包含旗帜的复杂图案部分，如印度国旗'
      },
      {
        idx: 6,
        state:false,
        code:'角',
        word:'三角形',
        info:'旗帜的图案内容或分割结构具有至少一个三角形，如尼泊尔国旗'
      },
      {
        idx: 7,
        state:false,
        code:'四',
        word:'正/长方形',
        info:'旗帜内含有未贯穿长宽结构的，四个角均为直角的正四边形，如美国国旗'
      },
      {
        idx: 8,
        state:false,
        code:'不',
        word:'四边形',
        info:'旗帜内含有梯形/菱形等四个非直角图形，可以是贯穿长宽结构的设计'
      },
      {
        idx: 9,
        state:false,
        code:'条',
        word:'条形',
        info:'旗帜含有2个及以上贯穿长或宽结构的垂/直正四边形，如俄罗斯国旗'
      },
      {
        idx: 10,
        state:false,
        code:'圆',
        word:'圆形',
        info:'旗帜内含有至少一个圆，可以是图形或图案/复杂图案，如日本国旗'
      },
      {
        idx: 11,
        state:false,
        code:'十',
        word:'十字形',
        info:'旗帜中含有一个十字或X字图形，这个图形必须具有面积，如英国国旗'
      },
      {
        idx: 12,
        state:false,
        code:'1',
        word:'完整结构',
        info:'旗帜上下左右四个边角都没有与任何设计发生接触，如中国国旗'
      },
      {
        idx: 13,
        state:false,
        code:'2',
        word:'双分结构',
        info:'旗帜被贯穿长或宽的设计分割为两个部分，如巴基斯坦国旗'
      },
      {
        idx: 14,
        state:false,
        code:'8',
        word:'横向三分',
        info:'旗帜被横向分割为三个条形，且所有条形没有被完全阻断，如法国国旗'
      },
      {
        idx: 15,
        state:false,
        code:'3',
        word:'其他三分',
        info:'旗帜呈现三个部分，除横向分割以外的所有三分结构均为此类，如捷克国旗'
      },
      {
        idx: 16,
        state:false,
        code:'4',
        word:'四分结构',
        info:'旗帜被分割为4个部分，如果十/X字形贯穿长宽，也属于四分结构'
      },
      {
        idx: 17,
        state:false,
        code:'5',
        word:'多分结构',
        info:'旗帜呈破碎状，或组成旗帜的结构数量大于等于5，如英国国旗'
      },
      {
        idx: 18,
        state:false,
        code:'星',
        word:'星星图案',
        info:'旗帜内含有唯一的星星图案，包括四/五/六/多角星，如以色列国旗'
      },
      {
        idx: 19,
        state:false,
        code:'多',
        word:'多星图案',
        info:'旗帜内含有多个星星图案，至少2颗及以上，如中国/美国国旗'
      },
      {
        idx: 20,
        state:false,
        code:'月',
        word:'月亮图案',
        info:'旗帜内含有一个或多个弯月，可以是复杂图案中的内容，如巴基斯坦国旗'
      },
      {
        idx: 21,
        state: false,
        code:'日',
        word:'太阳图案',
        info:'旗帜含有散发光芒的太阳，无论图案本身是否象征太阳，不含日本国旗'
      },
      {
        idx: 22,
        state: false,
        code:'动',
        word:'动物图案',
        info:'旗帜内含有动物或想象中的生物图案，不包含人物，如墨西哥国旗'
      },
      {
        idx: 23,
        state:false,
        code:'植',
        word:'植物图案',
        info:'旗帜内含有植物图案，或构图中具有麦穗/花环，如加拿大的枫叶图'
      },
      {
        idx: 24,
        state:false,
        code:'字',
        word:'文字/花纹',
        info:'旗帜内含有文字或花纹，花纹不等于植物，如伊朗国旗'
      },
      {
        idx: 25,
        state:false,
        code:'器',
        word:'武器/工具',
        info:'旗帜含有生产/交通工具/武器或盾牌图案，如帆船/枪械或齿轮'
      },
      {
        idx: 26,
        state:false,
        code:'人',
        word:'人物/装饰',
        info:'含有人物肖像、肢体或首饰，如王冠/绶带/旗帜 (旗里还是旗，套娃？)'
      },
      {
        idx: 27,
        state:false,
        code:'山',
        word:'建筑/山水',
        info:'旗帜含有山水/建筑图案或地图轮廓，如柬埔寨/塞浦路斯国旗'
      },
      {
        idx: 28,
        state:false,
        code:'单',
        word:'纯色图案',
        info:'完全由纯色构成的复杂图案，包含最多三种颜色，如蒙古国国旗'
      },
      {
        idx: 29,
        state:false,
        code:'彩',
        word:'彩色图案',
        info:'旗帜图案有写实风格 或 含有多种渐变颜色/描边等特征'
      },
      {
        idx: 30,
        state:false,
        code:'无',
        word:'无图案',
        info:'旗帜仅有图形，没有图案，如日本/俄罗斯国旗'
      },
      {
        idx: 31,
        state:false,
        code:'非',
        word:'非规则旗帜',
        info:'旗帜的结构并非一个规则的正四边形，而是三角形或梯形等其他形状'
      },
    ]
    };
  },
  methods:{
    down(){
      if(this.see){
        this.$refs.bottomBar.style.bottom = '-240px'
      }else{
        this.$refs.bottomBar.style.bottom = '0px'
      }
    },
    back(){
      this.tags.map(item=>{item.state=false})
    },
    sentBack(){
      this.$emit('sentBack')
    },
    sendCode(key){
      this.$emit('sendCode',key)
    }
  }
}
</script>

<style scoped>
.type1{
  color: purple;
}
.type2{
  color: rgb(36, 83, 238)
}
.type3{
  color: green;
}
#bottomBar{
  width: 100%;
  height: 380px;
  background: #db4137;
  position: fixed;
  bottom: -240px;
  overflow: hidden;
  transition: all ease 0.2s;
  box-shadow: 0px -3px 5px rgba(0,0,0,0.2);
}
#top{
  height: 32px;
  line-height: 32px;
  font-size: 16px;
  color: white;
  position: relative;
  z-index: 33;
}
#top img{
  height: 20px;
  vertical-align: middle;
  transition: all ease 0.2s;
}
.rotateImg{
  transform: rotate(180deg);
}
#icon{
  position: absolute;
  z-index: 99;
  top: 40px;
  right: 3%;
}
#icon img{
  float: left;
  margin-left: -4px;
  width: 20px;
  border: 1px solid rgba(255,255,255,0);
  border-radius: 50%;
  position: relative;
  left: 3px;
  transition: all ease 0.5s;
  z-index: 99;
}
#count{
  position: absolute;
  z-index: 99;
  font-size: 10px;
  color: white;
  top: 73px;
  right: 17px;
}
#info{
  width: 31%;
  height: 60px;
  padding: 2px;
  color: white;
  text-indent: 2em;
  text-align: start;
  font-size: 10px;
  position: absolute;
  left: 2%;
}
#topImg{
  position: absolute;
  height: 95px;
  left: 0;
  right: 0;
  margin: auto;
  margin-top: -30px;
  transition: all ease 0.2s;
  z-index: 22;
}
#topImg:active{
  transform: scale(1.1);
}
#tags{
  width: 97%;
  margin-left: 1.5%;
  height: 234px;
  top: 90px;
  border-radius: 2px;
  background: #eeeded;
  position: absolute;
  z-index: 33;
  overflow: hidden;
}
#itemImg{
  position: absolute;
  bottom: -6px;
  right: 0;
  z-index: 22;
  width: 75%;
  opacity: 0.8;
}

/* .itemP:active{
  transform: scale(1.2);
} */
.choose{
  background: #DB4137 !important;
  color: white !important;
}
</style>
