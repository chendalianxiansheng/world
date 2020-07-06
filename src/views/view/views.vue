<template>
  <div @click="showPop($event)" id="views">
    <!-- 视图组件根元素  @点击触发泡泡 -->
    <div id="pop" ref="pop"></div> 
      <!-- 点击泡泡的具体实现div -->
    <div id="tags" v-if="tags">
      <!-- 旗帜特征选择面板 @点击创建/移除-->
      <div id="tags-top" @click="tags=false">特征过滤 ×</div>
        <!-- 旗帜特征顶部div @点击移除-->
    <transition-group name="imgScale" appear>
      <!-- 旗帜特征标签过度样式 -->
      <div class="buttons" v-for="item in $store.state.buttons" :key="item.idx" @click="item.state=!item.state,getOut(),sumNum=maxNum,item.state?buttonInfo=item.info:'',item.state?flagStyle.push(item.code):flagStyle.splice(flagStyle.indexOf(item.code),1)" >
        <!-- 旗帜特征标签div 2级 -->
      <img :src="item.url" alt="" :class="{border1:item.state}">
        <!-- 旗帜特征标签图片 2级 -->
      <p :style="{color:item.state?'black':''}">{{item.word}}</p>
        <!-- 旗帜特征p标签 2级 -->
    </div>
    </transition-group>
      <p id="buttons-p">{{buttonInfo}}</p>
      <!-- 旗帜特征底部介绍div 2级 -->
      <img src="../../../public/img/bg/gw.png" alt="" id="pic1">
      <!-- 旗帜特征底部背景图片 2级 -->
      <img src="../../../public/img/tags/clear.png" @click="clearTag(),buttonInfo=buttonInfor,flagStyle=[]" id="clear" alt="">
      <!-- 旗帜特征右下角重置图片 2级 -->
    </div>
    <transition appear name="keyTag">
    <!-- 左下角标签 -->
      <span id="keyTag" v-if=attrState>
      
        <span @click="sideBar=true,sideBar?stopScroll():startScroll()">{{attrState}}</span>  
     
      <span @click="attrState='',attrKey='',getOut(),showMsg('标签已清除')">×</span>
    </span>
    </transition>
    <!-- 左下角标签实现 -->
    <div id="bbg" v-show="sideBar" @click="sideBar=false,startScroll()"></div>
    <!-- 层级高度为33的黑色模板 -->
    <transition name="sideBar">
      <!-- 侧边栏的运动效果元素 -->
      <side-bar v-show="sideBar" @sendkey="addkey" @cancelkey="cancelkey" @sendTag="" @sendImg="chooseImg" @sendInit="init">
        <!-- 侧边栏的真实DOM -->
        <span slot="wlk" v-if="searchkey.length<15" class="wlk">*以上搜索内容，至少选择一项！</span>
        <!-- 当索引按键都没有被激活时 -->
        <span slot="wlk" v-else class="wlk">*可搜索英文字母，至少选择一项</span>
        <!-- 当至少有一个索引按键被激活时 --> 
        <div v-for="item in $store.state.attr" slot="picp" :key="item.idx">
          <!-- sideBar组件用于渲染的图文父标签 -->
          <img slot="typeImg" :src="item.src" alt="" :class="{typeImg:attrKey==item.idx}" @click="attrKey=item.idx,sumNum=maxNum,attrKey?attrState=item.info:attrState='',showMsg('定位 - '+item.info)">
          <!-- 分类图片子标签， -->
          <p slot="typeInfo" v-show="item.idx==attrKey">{{item.intro}}</p>
          <!-- 分类文本字标签 -->
        </div>
      </side-bar>
      <!-- 用于分类功能的侧边栏，平时隐藏 -->
    </transition>
    <span id="showMessage" ref="show">当前操作：<br>{{message}}</span>
    <!-- 黑底白字提示框，默认隐藏 -->
    <search-input @sendClick="cancelIpt">
    <!-- 功能栏的搜索框 ↑ 功能栏的图标项 ↓ -->
        <input type="text" slot="search" placeholder="输入关键字" v-model="search" @keydown.13="iptBlur($event)" maxlength="5">
      <input-btn>
        <div slot="ipt-btn-out" @click="sumNum=maxNum,sortWay=='id'?'':reverse='',sendMutation('id'),sortWay='id',showMsg('按设计宽高比排序')">
          <!-- 1，防止重复点击清除reverse    2.修改排序方式    3.触发黑色弹框 -->
          <!-- 功能排序模块1-'ID' 下属正/反两个图片和文本 -->
          <img v-if="sortWay==='id'" slot="ipt-btn-icon" src="../../assets/img/viewImg/width1.png" alt="">
          <img v-else slot="ipt-btn-icon-active" src="../../assets/img/viewImg/width0.png" alt="">
          <p slot="ipt-btn-text" :class="{font:sortWay==='id'}">按设计</p>
          <!-- 字体跟随关键字的切换激活类名 -->
        </div>
      </input-btn>

      <input-btn>
        <div slot="ipt-btn-out" @click="sumNum=maxNum,sortWay=='ename'?'':reverse='',sendMutation('ename'),sortWay='ename',showMsg('按英文首字母排序')">
          <img v-if="sortWay==='ename'" slot="ipt-btn-icon" src="../../assets/img/viewImg/code1.png" alt="">
          
          <img v-else slot="ipt-btn-icon-active" src="../../assets/img/viewImg/code0.png" alt="">
          
          <p slot="ipt-btn-text" :class="{font:sortWay==='ename'}">按字母</p>
        </div>
      </input-btn>

      <input-btn>
        <div slot="ipt-btn-out" @click="sumNum=maxNum,sortWay=='area'?'':reverse='',sendMutation('area'),sortWay='area',showMsg('按国家面积排序')">
          <img v-if="sortWay==='area'" slot="ipt-btn-icon" src="../../assets/img/viewImg/m1.png" alt="">
          
          <img v-else slot="ipt-btn-icon-active" src="../../assets/img/viewImg/m0.png" alt="">
          
          <p slot="ipt-btn-text" :class="{font:sortWay==='area'}">按面积</p>
        </div>
      </input-btn>
      <input-btn>
        <div slot="ipt-btn-out" @click="sumNum=maxNum,sortWay=='people'?'':reverse='',sendMutation('people'),sortWay='people',showMsg('按国家人口排序')">
          <img v-if="sortWay==='people'" slot="ipt-btn-icon" src="../../assets/img/viewImg/people1.png" alt="">
          <img v-else slot="ipt-btn-icon-active" src="../../assets/img/viewImg/people0.png" alt="">
          <p slot="ipt-btn-text" :class="{font:sortWay==='people'}">按人口</p>
        </div>
      </input-btn>  
      <input-btn>
        <div slot="ipt-btn-out" @click="sumNum=maxNum,sortWay=='gdp'?'':reverse='',sendMutation('gdp'),sortWay='gdp',showMsg('按年产总值排序/美元')">
          <img v-if="sortWay==='gdp'" slot="ipt-btn-icon" src="../../assets/img/viewImg/GDP1.png" alt="">
          <img v-else slot="ipt-btn-icon-active" src="../../assets/img/viewImg/GDP0.png" alt="">
          <p slot="ipt-btn-text" :class="{font:sortWay==='gdp'}">按总量</p>
        </div>
      </input-btn>
      <input-btn>
        <div slot="ipt-btn-out" @click="sumNum=maxNum,sortWay=='per'?'':reverse='',sendMutation('per'),sortWay='per',showMsg('按人均收入排序/美元')">
          <img v-if="sortWay==='per'" slot="ipt-btn-icon" src="../../assets/img/viewImg/per1.png" alt="">
          <img v-else slot="ipt-btn-icon-active" src="../../assets/img/viewImg/per0.png" alt="">
          <p slot="ipt-btn-text" :class="{font:sortWay==='per'}">按人均</p>
        </div>
      </input-btn>
      <input-btn>
          <div slot="ipt-btn-out" @click="tags=!tags">
          <span id="arrLen" v-if="flagStyle.length" :class="{font:!tags}">{{flagStyle.length}}</span>
          <img v-if="tags" slot="ipt-btn-icon" src="../../assets/img/viewImg/rings1.png" alt="">
          <!-- reverse为正时，倒序有效 -->
          <img v-else slot="ipt-btn-icon-active" src="../../assets/img/viewImg/rings0.png" alt="">
          <p :class="{font:tags}" slot="ipt-btn-text">过滤项</p>
        </div>
      </input-btn>
      <input-btn>
        <div slot="ipt-btn-out" @click="sideBar=!sideBar,sideBar?stopScroll():startScroll()">
          <div id="count">{{result.length}}</div>
          <p slot="ipt-btn-text" class="font">展示数</p>
        </div>
      </input-btn>
      <input-btn>
          <div slot="ipt-btn-out">
          <img v-if="reverse" slot="ipt-btn-icon" @click="reverseItem(),reverse='',showMsg('取消倒序')" src="../../assets/img/viewImg/rotate1.png" alt="">
          <!-- reverse为正时，倒序有效 -->
          <img v-else slot="ipt-btn-icon-active" @click="reverseItem(),reverse=true,showMsg('倒序')" src="../../assets/img/viewImg/rotate0.png" alt="">
          <p :class="{font:reverse}" slot="ipt-btn-text">倒 序</p>
        </div>
      </input-btn>
      
    </search-input>
    <div class="space"></div>
    <!-- 填充浮动功能栏的大白块 (●—●) -->
  <div v-if="result.length>0" @click="sideBar=''">
    <!-- if/else切换无结果填充图 -->
    <transition appear name="changeList">
    <div>
      <!-- 表单切换的特效实现 -->
    <div class="list" v-for="(item,idx) in result.slice(0,sumNum)" :key="item.id">
      <div id="flag">
        <div class="king" :class="{class2:item.type==2,class3:item.type==3,class4:item.type==4,class5:item.type==5}">♚</div>
        
        <img :src="item.flag" alt=""  @click="toDatas(item)">  
        <!-- 图片懒加载，有使用效果，但不知道有没有性能提升 -->
        <p id="content">{{item.land}} / {{item.place}}</p>
        
        <p id="ename">{{item.ename}}</p>
      </div>
      <!-- 图片区 左侧30% -->
      <div id="content">
        <p class="name">{{item.name}}</p>
        <p class="fullname">{{item.fullname}}</p>
        <p class="line-a">首都：{{item.city}}</p>
        <icon-tag>
          <!-- 子组件资料小模块，展示数据   并排2个 -->
          <img slot="item-img1" src="../../assets/img/viewImg/people.png" alt="">
          <p slot="item-p1"> {{item.people | numb}}人</p>
          <img slot="item-img2" class="item-end" src="../../assets/img/viewImg/area.png" alt="">
          <p slot="item-p2" class="item-end"> {{item.area | numb}}km²</p> 
        </icon-tag>
        <icon-tag class="icon-tag2" v-if="item.gdp">
          <!-- 资料小模块  第二个 -->
          <img slot="item-img1" src="../../assets/img/viewImg/GDP.png" alt="">
          <p slot="item-p1"> {{item.gdp | gdp}}</p>
          <img slot="item-img2" src="../../assets/img/viewImg/money.png" alt="">
          <p slot="item-p2" class="item-end"> {{item.per | per}}</p>
        </icon-tag>
        <icon-tag class="icon-tag3" v-else="item.gdp">
          <img slot="item-img1" src="../../assets/img/viewImg/earth.png" alt="">
          <p slot="item-p1"> 主权国 : {{item.from}}</p>
        </icon-tag>
      </div>
      <!-- 数据库 中部40% -->
        <div id="badge">
          <img v-lazy="item.badge" alt="">
        <!-- 懒加载,国家国徽 -->
          <div id="index">{{idx+1}}</div>
        <!-- 备选功能按键，预留 -->
        </div>
      </div>  
    </div>
    </transition>
    <img id="goTo" src="../../assets/img/viewImg/arrow.png" alt="" @click="getOut(),sumNum=maxNum,showMsg('返回顶部')">  
    <transition name="fadeImg" appear>
      <div id="menu" @touchstart="sumNum<result.length?showMore():showMsg('已无更多数据')">
        <img v-if="sumNum<result.length" src="../../assets/img/viewImg/swipe.png" alt="" ref="bottomTag">
        <img v-else src="../../assets/img/viewImg/end.png" alt="">
        <!-- 底部提示和横线 -->
      </div> 
    </transition>
  </div>

  <div v-else id="no-div">
    <!-- 无结果需要渲染的内容 -->
    <transition name="changeStyle" appear>
      <!-- 无结果展示内容的特效实现 -->
      <img src="../../../public/img/sideBar/ball.png" alt="" id="no-result">
    </transition>
  </div>
    <div id="view-bottom">
    </div>
    <!-- 填充底部tabBar的div -->
  </div>
</template>

<script>
import searchInput from "../../components/view/searchInput"
import inputBtn from "../../components/view/inputBtn"
import iconTag from "../../components/view/iconTag"
import sideBar from "../../components/view/sideBar"

export default {
  name: 'views',
  components:{
    searchInput,    //搜索框组件
    inputBtn,      //图标功能组件
    iconTag,      //资料模板组件
    sideBar,     //侧边栏组件
  },
  data() {
    return {
      search: '',               //搜索词条
      sortWay: 'id',           //排序方式变量
      color: true,            //激活颜色变量
      reverse: false,        //倒序数组变量
      message: '',          //点击时传入的消息框内容
      showTimer: null,     //消息框定时器 
      sideBar: false,     //侧边栏的显示状态
      searchkey: 'item.ename+item.name+item.land',
      attrKey: '',         
      attrState: '',
      maxNum: 30,
      sumNum: 30,
      tags: false,
      buttonInfo: '过滤 简介 : 选择需要过滤的旗帜特征，含有颜色/图形/图案和结构分类',
      buttonInfor: '过滤 简介 : 选择需要过滤的旗帜特征，含有颜色/图形/图案和结构分类',
      type1: 1,
      type2: false,
      type3: false,
      type4: false,
      type5: false,
      flagStyle:[]
    }
  }, 
  beforeRouteLeave:((to, from, next)=>{
    // this.$store.state.page = document.body.scrollTop || document.documentElement.scrollTop
    next()
  }),
  computed:{
    result(){       //数据过滤运算
       return (this.$store.state.flags.filter(item=>
              //第一层,数组类型过滤    
            (item.type== this.type1 || item.type== this.type2 || item.type== this.type3 || item.type== this.type4 || item.type== this.type5) && 
             //第二层数组匹配特征过滤
            this.flagStyle.every(itm=>item.code.indexOf(itm)!==-1) &&
            //第三层数组匹配标签过滤
            (item.attr).indexOf(this.attrKey)>-1 &&
        (     //第四层数组关键字过滤
          eval(this.searchkey)
        ).indexOf(this.search)>-1))
      
    },
  },
  methods:{
    iptBlur(e){     //点击键盘确定(13)时，输入框失去焦点
      e.target.blur()
    },
    cancelkey(msg,e){   //从eval字符串中取出关键字
      this.showMsg('取消'+e+'过滤')
      this.searchkey = this.searchkey.replace(msg,'')
    },
    addkey(msg,e){   //向eval字符串中注入关键字
      this.showMsg('增加'+e+'过滤')
      this.searchkey+=msg
    },
    reverseItem(){   //向store发出源数组倒序命令
        this.sumNum = this.maxNum
        this.getOut()
        this.$store.commit('reverseItem')
    },
    sendMutation(key){   //切换排序方式时，产生提示框，忽略重复请求
      if(this.sortWay===key){
        return
      }else{
        this.getOut()
        this.$store.commit('sortMethod',key)
      }
    },
    clearTag(){       //将搜索项重置
      this.$store.commit('clearTag')
    },         
    cancelIpt(){  //重置输入框  
    if(this.search){                 
      this.search='' 
      this.showMsg('已清除当前搜索项')
      }           
    },
    showMsg(message){      //小黑弹框的内容控制
      var div = this.$refs.show
      div.style.display='block'
      this.message = message
      if(this.showTimer){                //如果定时器存在则清除重启
        clearTimeout(this.showTimer)
        this.showTimer = setTimeout(()=>{
        this.$refs.show.style.display='none'
        },this.$store.state.time)
      }else{                          //不存在则照旧进行
        this.showTimer = setTimeout(()=>{
        this.$refs.show.style.display='none'
        },this.$store.state.time)
      }
    },
    getOut(){         //滚回顶部
      document.body.scrollTop = document.documentElement.scrollTop = 0
    },
    stopScroll(){     //触发滚动条锁定
      document.body.style.position = "fixed"
    },
    startScroll(){    //触发后解除滚动条锁定
      document.body.style.position = "static"
    },
    showMore(){     //点击加载更多
      if(this.sumNum<this.result.length){
        this.sumNum+=this.maxNum
      }
    },
    showPop(event){   //点击产生泡泡
      var pop = this.$refs.pop
      pop.style.left = (event.clientX - 12) + 'px'
      pop.style.top = (event.clientY - 12) + 'px'
      pop.style.display="block"
      setTimeout(()=>{
        pop.style.display = "none"
      },200)
    },
    init(){    //点击初始化搜索项
      this.clearTag()
      this.search=''
      this.attrKey=''
      this.attrState=''
      this.buttonInfo=this.buttonInfor
      this.flagStyle=[]
      this.type1 = 1
      this.type2 = false
      this.type3 = false
      this.type4 = false
      this.type5 = false
      this.showMsg('已重置所有搜索项')
    },
    // backTop(){   //有点卡，弃用该方案
    //   var that = this
    //   let timer = setInterval(()=>{
    //     var speed = Math.floor(-that.scrollTop / 5)
    //     document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + speed
    //     if(that.scrollTop == 0){
    //       clearInterval(timer)
    //     }
    //   },16)
    // },
    // scrollToTop(){
    //   var that = this
    //   var scrollTop = document.body.scrollTop || window.pageYOffset
    //   that.scrollTop = scrollTop
    //   if(that.scrollTop > 300){
    //     that.topBtn = true
    //   }else{
    //     that.topBtn = false
    //   }
    // }
    toDatas(item) {    //跳路由,送出整个item
      this.$router.push({
      path: '/datas',
      // query: {   //不传值直接改值
      //   item: item
      //   }     
      })
      this.$store.state.items = item
    },    
    chooseImg(idx,type){    //面板选择
      if(typeof this[type]=='number'){
        this[type] = false
      }else{
        this[type] = idx
      }
    },
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
    gdp(data){     //文字过滤器2
      if(data===0){
        return '数据暂无'
      }else if(data>10000){
        return data/10000+'万亿'
      }else{
        return data+'亿'
      }
    },
    per(data){
      if(data){
        return data+'美元'
      }else{
        return '无法计算'
      }
    },
  }      //filter尾括号
}       //配置尾括号
</script>

<style scoped>
.class2{
  color: purple !important;
}
.class3{
  color: rgb(5, 98, 236);
}
.class4{
  color: green;
}
.class5{
  color: black;
}
.border1{
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  border: 1px solid black !important;
  position: relative;
  transform: scale(1.2);
  /* border-radius: 50%; */
}
#arrLen{
  font-size: 10px;
  margin-left: 12px;
  float: right;
  top: 1px;
  padding: 1px;
  line-height: 10px;
  letter-spacing: -1px;
  font-weight: 500;
  color: rgb(51, 51, 51);
  position: absolute;

}
#pop{   
  /* 泡泡的具体实现 */
  width: 24px;
  height: 24px;
  background: rgba(0, 0, 0, .15);
  border-radius: 50%;
  display: none;
  position: fixed;
  z-index: 9999;
  transition: all ease 0.2s;
}
#tags{  
  /* 旗帜特征定位的面板 */
  width: 60%;
  height: 460px;
  background: white;
  position: fixed;
  z-index: 9999;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  overflow-y: hidden;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}

#tags-top{
  width: 100%;
  height: 40px;
  font-size: 16px;
  line-height: 40px;
  color: white;
  background: #db4137;
}
#tags .buttons{
  width: 20%;
  height: 50px;
  float: left;
}
#tags .buttons img{
  margin-top: 8px;
  height: 19px;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
#tags .buttons p{
  margin-top: 5px;
  font-size: 8px;
  line-height: 12px;
  color: rgb(197, 195, 195);
}
#buttons-p{
  clear: both;
  width: 88%;
  margin-left: 5%;
  text-indent: 2em;
  text-align: start;
  padding: 12px 1%;
  font-size: 10px;
  font-weight: 700;
}
#pic1{
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 0.3;
  z-index: -1;
}
#clear{
  width: 25px;
  position: absolute;
  bottom: 3px;
  right: 3px;
  z-index: 2;
  transition: all ease 0.2s;
}
#clear:active{
  transform: scale(1.2);
}
.font{     /* 渲染色，主题色 */
  color: #DB4137 !important;
}
.typeImg{
  border: 1px solid black !important;
}
#keyTag{
  position: fixed;
  z-index: 22;
  padding: 3px 10px;
  color: white;
  bottom: 68px;
  left: -10px;
  background-image: url("../../../public/img/bg/cloud-dark.png");
  background-size: 40px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}
#keyTag span{
  padding-left: 7px;
}
#bbg{
  width: 100%;
  height: 100%;
  background:rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 33;
}
.choose{
  background: #DB4137 !important;
  color: white !important;
}
#showMessage{     /* 弹出的消息框 */
  position: fixed;
  z-index: 999;
  transform: translateX(-50%);
  background:rgba(0, 0, 0, 0.8);
  color: white;
  text-align: center;
  padding: 5px 15px;
  top: 35%;
  left: 50%;
  display: none;
  transition: all ease 0.3s;
}
#count{   /* 右上角的计数区域 */
  font-size: 17px;
  height: 20px;
  line-height: 22px;
  margin-top: 3px;
  text-align: center;
  color: #DB4137;
  letter-spacing: -2px;
}
.wlk{
  font-size: 10px;
  text-decoration: underline;
  margin-left: -30%;
}
.space{    /* 占位白块 */
  width: 100%;
  height: 36px; 
}
.king{
  color: orange;
  position: absolute;
  top: -5px;
}
.list{    /* 被渲染的单个内容块 */
  width: 96%;
  height: 89px;
  background: white;
  display: flex;
  margin-left: 1.5%;
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
  /* border-radius: 6px; */
  margin-top: 6px;
  overflow: hidden;
  /* box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3); */
  user-select: none;
} 
.list:hover{
  background: #DB4137;
  box-shadow: 3px 3px 5px rgba(0,0,0,0.3)
}
.list:hover p{
  color: white !important;
}
.list:hover #badge #index{
  background: white;
  color: #DB4137;
}
.list p{    /* 内容块中的所有p标签 */
  overflow:visible;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.list #flag{   /* 内容块中的第一部分 国旗+英文国名 */
  flex: 0.29;
  position: relative;
}
.list #flag img{   /* 内容块第一部分的国旗图片 */
  height: 50px;
  margin-top: 6px;
  text-align: start;
  float: left;
  margin-left: 5px;
  border: 1px solid #AEAAAA;
}
.list #flag #content{
  font-size: 10px;
  position: absolute;
  bottom: 14px;
  left: 5px;
  color: black;
}
.list #flag #ename{   /* 内容块第一部分的p标签 */
  position: absolute;
  font-size: 17px;
  line-height: 18px;
  font-weight: 700;
  left: 5px;
  bottom: -3px;
  color: rgb(204, 203, 203, 0.7);
  
}
.list #content{   /* 内容块的第二部分：中间文字 */
  flex: 0.41;
  width: 41%;
}
.list #content .name,.fullname,.line-a{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.list #content .name{  /* 内容块第二部分中间文字的标题 */
  color: black;
  font-weight: 700;
  margin-top: 2px;
}
.list #content .fullname{  /* 内容块中间部分的副标题 */
  font-size: 10px;
  line-height: 15px;
}
.list #content .line-a{  
  color: #DB4137;
  font-size: 10px;
}
.list #badge{  /* 内容块第三部分的徽章区 */
  flex: 0.3;
  position: relative;
}
.list #badge img{  /* 内容块第三部分的徽章图片 */
  position: absolute;
  width: 140px;
  top: -7%;
  left: 0%;
  z-index: 0;
}
.list #badge #index{   /* 数据列表右上角序列标志 */
  position: absolute;
  z-index: 0;
  width: 20px;
  height: 20px;
  right: 1%;
  font-size: 10px;
  line-height: 20px;
  color: white;
  background: #DB4137;
  border-radius: 20px;
}
.changeList-enter,.changeList-leave-to{    
  transform: translateY(500px);
}
.changeList-enter-active,.changeList-leave-active{   
  transition: all 0.5s ease;
}
.changeList-move{     /* 数据列表过度过程 */
  transition: all 0.5s ease;
}
/* .changeList-leave-active{
  position: absolute;
} */
.changeStyle-enter,.changeStyle-leave-to{   /* 无效图初始和结束样式 */
  transform: translateX(200px);    
  opacity: 0;
}
.changeStyle-enter-active,.changeStyle-leave-active{   /* 无效图过度效果 */ 
  transition: all 0.5s ease;
}
/* 侧边栏的开始和结束样式 */
.sideBar-enter,.sideBar-leave-to{    
  transform: translateX(500px);
  opacity: 0;
}
.sideBar-enter-active,.sideBar-leave-active{
  transition: all ease 0.2s;
}
.keyTag-enter,.keyTag-leave-to{
  transform: translateX(-100%);
}
.keyTag-enter-active,.keyTag-leave-active{
  transition: all ease 0.5s;
}
/* imgScale特征面板初加载 */
.imgScale-enter,.imgScale-leave-to{
  transform: scale(0);
}
.imgScale-enter-active,.imgScale-leave-active{
  transition: all ease 0.5s;
}
/* fadeImg底部menu按钮的动态效果 */
.fadeImg-enter,.fadeImg-leave-to{
  transform: translateX(100%);
}
.fadeImg-leave-active{
  display: none;
}
.fadeImg-enter-active,.fadeImg-leave-active{
  transition: all ease 1s;
}
#view-bottom{  
  /* 底部填充div */
  width: 100%;
  height: 70px;
}
#no-div{   
  /* 无效图容器的空间位置 */
  width: 100%;
  height: 100%;
}
#no-result{
  /* 没有搜索结果时展示的地球图片 */
  position: absolute;
  width: 50%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
#menu{
  /* 下方按钮和hr横线的整体 */
  margin-top: 10px;
  position: relative;
}
#menu:after{
  /* 按钮内的hr横线 */
  content:'';
  width: 90%;
  height: 1px;
  background: #DB4137;
  position: absolute;
  top: 64%;
  left: 5%;
  z-index: 1;
}
#menu img{
  /* 已无更多 和 下滑加载按钮 */ 
  position: relative;
  z-index: 2;
  top: 4px;
  width: 60px;
}
#goTo{
  /* 返回顶部按钮 */ 
  position: fixed;
  width: 30px;
  right: 15px;
  border-radius: 1px;
  bottom: 65px;
  z-index: 33;
  background:rgba(0, 0, 0, 0.5);
  transition: all ease 0.1s;
}
#goTo:active{   
  /* 返回顶部点击效果 */
  transform: scale(1.1);
  background: #db4137;
}

</style>      
