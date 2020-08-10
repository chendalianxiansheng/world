
<!-- Views主路由的实现 -->

<template>
  <div id="views">
  <transition name="explain" appear>
    <div id="tags" v-show="tags">
    <!-- 旗帜特征选择面板 @点击创建/移除-->
      <div id="tags-top" @click="tags=false">特征过滤 ×</div>
      <!-- 旗帜特征顶部div @点击移除-->
      <div 
        class="buttons" 
        v-for="item in $store.state.buttons" 
        :key="item.idx" 
        @click="item.state=!item.state,getOut(),sumNum=maxNum,item.state?buttonInfo=item.info:'',item.state?flagStyle.push(item.code):flagStyle.splice(flagStyle.indexOf(item.code),1)" >
      <!-- 旗帜特征标签div -->
      <img
        alt="旗帜特征"  
        :src="item.url" 
        :class="{border1:item.state}">
      <!-- 旗帜特征标签图片 -->
      <p :style="{color:item.state?'black':''}">{{item.word}}</p>
      <!-- 旗帜特征的图片按钮描述 -->
    </div>
      <p id="buttons-p">{{buttonInfo}}</p>
      <!-- 旗帜特征底部介绍div -->
      <img 
        src="../../../public/img/bg/gw.png" 
        alt="旗帜特征" 
        id="pic1">
      <!-- 旗帜特征底部背景图片 => 目前是上海陆家嘴 -->
      <img 
        src="../../../public/img/tags/clear.png" 
        @click="clearTag(),buttonInfo=buttonInfor,flagStyle=[]" 
        id="clear" 
        alt="重置搜索项">
      <!-- 旗帜特征右下角重置图片 垃圾箱回收图标 -->
    </div>
  </transition>
  <transition appear name="keyTag">
  <!-- 左下角标签的渐入渐出特效实现 -->
    <span id="keyTag" v-if=attrKey>
    <!-- 左下角标签的实体以及逻辑控制 -->
      <span @click="sideBar=true,sideBar?stopScroll():startScroll()">{{attrState}}</span>  
      <!-- 左下角标签的文字说明 -->
      <span @click="attrState='',attrKey='',getOut(),showMsg('标签已清除')">×</span>
      <!-- 左下角标签的关闭按钮和关闭逻辑 -->
  </span>
  </transition>

    <div id="mask" v-show="sideBar" @click="sideBar=false,startScroll()"></div>
    <!-- 层级高度为33的黑色蒙版 -->
    <transition name="sideBar">
      <!-- 侧边栏的运动效果元素 -->
      <side-bar 
        v-show="sideBar" 
        @sendkey="addkey" 
        @cancelkey="cancelkey" 
        @sendTag="explain=!explain" 
        @sendImg="chooseImg" 
        @sendInit="init">
        <!-- 侧边栏的真实DOM -->
        <span slot="warn" class="warn">*默认可搜索英文，至少选择一项！</span>
        <!-- 当索引按键都没有被激活时 -->
        <div 
          v-for="item in $store.state.attr" 
          slot="picp" 
          :key="item.idx">
        <!-- sideBar组件用于渲染的图文父标签 -->
          <img 
            slot="typeImg" 
            :src="item.src" 
            alt="分类内容" 
            :class="{typeImg:attrKey==item.idx}" 
            @click="attrKey=item.idx,sumNum=maxNum,attrKey?attrState=item.info:attrState='',showMsg('定位 - '+item.info)">
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
        <!-- <p slot="search-tag" @click="">▼ 检索项</p> -->
        <input 
          type="text" 
          slot="search" 
          placeholder="输入关键字" 
          v-model="search" 
          @keydown.13="iptBlur($event)" 
          maxlength="5">
          <!-- 输入框 -->
      <input-btn>
        <div slot="ipt-btn-out" @click="sumNum=maxNum,sortWay=='id'?'':reverse='',sendMutation('id'),sortWay='id',showMsg('按设计宽高比排序')">
          <!-- 1，防止重复点击清除reverse    2.修改排序方式    3.触发黑色弹框 -->
          <!-- 功能排序模块1-'ID' 下属正/反两个图片和文本 -->
          <img v-if="sortWay==='id'" slot="ipt-btn-icon" src="../../assets/img/viewImg/width1.png" alt="设计排序">
          <img v-else slot="ipt-btn-icon-active" src="../../assets/img/viewImg/width0.png" alt="">
          <p slot="ipt-btn-text" :class="{font:sortWay==='id'}">按设计</p>
          <!-- 字体跟随关键字的切换激活类名  按设计排序 -->
        </div>
      </input-btn>

      <input-btn>
        <div slot="ipt-btn-out" @click="sumNum=maxNum,sortWay=='ename'?'':reverse='',sendMutation('ename'),sortWay='ename',showMsg('按英文首字母排序')">
          <img v-if="sortWay==='ename'" slot="ipt-btn-icon" src="../../assets/img/viewImg/code1.png" alt="字母排序">
          
          <img v-else slot="ipt-btn-icon-active" src="../../assets/img/viewImg/code0.png" alt="">
          
          <p slot="ipt-btn-text" :class="{font:sortWay==='ename'}">按字母</p>
        </div>
      </input-btn>
      <!-- 按字母排序 -->

      <input-btn>
        <div slot="ipt-btn-out" @click="sumNum=maxNum,sortWay=='area'?'':reverse='',sendMutation('area'),sortWay='area',showMsg('按国家面积排序')">
          <img v-if="sortWay==='area'" slot="ipt-btn-icon" src="../../assets/img/viewImg/m1.png" alt="面积排序">
          
          <img v-else slot="ipt-btn-icon-active" src="../../assets/img/viewImg/m0.png" alt="">
          
          <p slot="ipt-btn-text" :class="{font:sortWay==='area'}">按面积</p>
        </div>
      </input-btn>
      <!-- 按面积排序 -->

      <input-btn>
        <div slot="ipt-btn-out" @click="sumNum=maxNum,sortWay=='people'?'':reverse='',sendMutation('people'),sortWay='people',showMsg('按国家人口排序')">
          <img v-if="sortWay==='people'" slot="ipt-btn-icon" src="../../assets/img/viewImg/people1.png" alt="人口排序">
          <img v-else slot="ipt-btn-icon-active" src="../../assets/img/viewImg/people0.png" alt="">
          <p slot="ipt-btn-text" :class="{font:sortWay==='people'}">按人口</p>
        </div>
      </input-btn> 
      <!-- 按人口排序 -->

      <input-btn>
        <div slot="ipt-btn-out" @click="sumNum=maxNum,sortWay=='gdp'?'':reverse='',sendMutation('gdp'),sortWay='gdp',showMsg('按年产总值排序/美元')">
          <img v-if="sortWay==='gdp'" slot="ipt-btn-icon" src="../../assets/img/viewImg/GDP1.png" alt="总量排序">
          <img v-else slot="ipt-btn-icon-active" src="../../assets/img/viewImg/GDP0.png" alt="">
          <p slot="ipt-btn-text" :class="{font:sortWay==='gdp'}">按总量</p>
        </div>
      </input-btn>
      <!-- 按GDP总量排序 -->

      <input-btn>
        <div slot="ipt-btn-out" @click="sumNum=maxNum,sortWay=='per'?'':reverse='',sendMutation('per'),sortWay='per',showMsg('按人均收入排序/美元')">
          <img v-if="sortWay==='per'" slot="ipt-btn-icon" src="../../assets/img/viewImg/per1.png" alt="">
          <img v-else slot="ipt-btn-icon-active" src="../../assets/img/viewImg/per0.png" alt="">
          <p slot="ipt-btn-text" :class="{font:sortWay==='per'}">按人均</p>
        </div>
      </input-btn>
      <!-- 按人均收入排序 -->

      <input-btn>
          <div slot="ipt-btn-out" @click="tags=!tags">
          <span id="arrLen" v-if="flagStyle.length" :class="{font:!tags}">{{flagStyle.length}}</span>
          <img v-if="tags" slot="ipt-btn-icon" src="../../assets/img/viewImg/rings1.png" alt="">
          <!-- reverse为正时，倒序有效 -->
          <img v-else slot="ipt-btn-icon-active" src="../../assets/img/viewImg/rings0.png" alt="">
          <p :class="{font:tags}" slot="ipt-btn-text">过滤项</p>
        </div>
      </input-btn>
      <!-- 启动过滤项 -->

      <input-btn>
        <div slot="ipt-btn-out" @click="sideBar=!sideBar,sideBar?stopScroll():startScroll()">
          <div id="count">{{result.length}}</div>
          <p slot="ipt-btn-text" class="font">展示数</p>
        </div>
      </input-btn>
      <!-- 当前展示数量与侧边栏按钮 -->


      <input-btn>
          <div slot="ipt-btn-out">
          <img v-if="reverse" slot="ipt-btn-icon" @click="reverseItem(),reverse='',showMsg('取消倒序')" src="../../assets/img/viewImg/rotate1.png" alt="">
          <!-- reverse为正时，倒序有效 -->
          <img v-else slot="ipt-btn-icon-active" @click="reverseItem(),reverse=true,showMsg('倒序')" src="../../assets/img/viewImg/rotate0.png" alt="">
          <p :class="{font:reverse}" slot="ipt-btn-text">倒 序</p>
        </div>
      </input-btn>
      <!-- 是否开启倒序模式 -->
      
    </search-input>

    <div class="space"></div>
    <!-- 填充浮动功能栏的大白块 (●—●) -->

  <div v-if="result.length>0" @click="sideBar=''">
  <!-- if/else切换无结果填充图 -->
  
    <transition appear name="changeList">
    <div>
      <!-- 表单切换的特效实现 -->
    <div 
      class="list" 
      v-for="(item,idx) in result.slice(0,sumNum)" 
      :key="item.id">
      <div class="flag">
        <div class="king" :class="{class2:item.type==2,class3:item.type==3,class4:item.type==4,class5:item.type==5}">♚</div>
        <!-- 右侧的小图标样式 -->
        <img :src="item.flag" alt="" @click="toDatas(item)">  
        <!-- 图片懒加载，有使用效果，但不知道有没有性能提升 -->
        <p class="feature">{{item.land}} / {{item.place}}</p>
        
        <p class="ename">{{item.ename}}</p>
      </div>
      <!-- 图片区 左侧30% -->
      <div class="content">
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
        <div class="badge">
          <img :src="item.badge" alt="">
          <!-- 懒加载,国家国徽 -->
          <div class="index">{{idx+1}}</div>
          <!-- 备选功能按键，预留 -->
        </div>
      </div>  
    </div>
    </transition>
    <img id="go-to" src="../../assets/img/viewImg/arrow.png" alt="" @click="getOut(),sumNum=maxNum,showMsg('返回顶部')">  
    <transition name="fadeImg" appear>
      <div id="menu" @touchstart="pageDown" @click="pageDown">
        <img 
          v-if="sumNum<result.length" 
          src="../../assets/img/viewImg/swipe.png" 
          alt="滑动加载" 
          ref="bottomTag">
          <!-- 底部滑动提示图片 -->
        <img 
          v-else 
          src="../../assets/img/viewImg/end.png" 
          alt="已无更多">
        <!-- 底部提示和横线 -->
      </div> 
    </transition>
  </div>

  <div v-else id="no-div">
    <!-- 无结果需要渲染的内容 -->
    <transition name="changeStyle" appear>
    <!-- 无结果展示内容的特效实现 -->
      <img src="../../../public/img/sideBar/ball.png" alt="" id="no-result">
      <!-- 找不到结果的图片实现，一个球 -->
    </transition>
  </div>
    <div id="view-bottom">
    <!-- 底部充数div -->
    </div>
    <!-- 填充底部tabBar的div -->
    <transition name="explain">
      <explain 
        v-if="explain" 
        @click="explain=false" 
        @sendExp="explain=false">
      </explain>
      <!-- 说明模块的开启状态 -->
    </transition>
  </div>
</template>

<script>

//组件区
import searchInput from "../../components/view/searchInput"
//顶部搜索框组件
import inputBtn from "../../components/view/inputBtn"
//顶部菜单栏的按钮插槽
import iconTag from "../../components/view/iconTag"
//资料部分content的排列样式
import sideBar from "../../components/view/sideBar"
//侧边栏组件
import explain from "../../components/view/explain"
//说明弹出框组件


//功能区
import { numb,gdp,per } from "@/views/pubFunc/filter"
//公共filter方法
 
export default {
  name: 'views',
  components:{
    searchInput,    //搜索框组件
    inputBtn,      //图标功能组件
    iconTag,      //资料模板组件
    sideBar,     //侧边栏组件
    explain     //说明组件
  },
  data() {
    return {
      search: '',               //搜索词条
      sortWay: 'id',           //排序方式变量
      color: true,            //激活颜色变量
      reverse: false,        //倒序数组变量
      message: '',          //点击时传入的消息框内容
      //showTimer: null,   //消息框定时器 
      sideBar: false,     //侧边栏的显示状态
      searchkey: 'item.ename+item.name+item.land', //eavl控制的搜索项
      attrKey: '',                //左下角标签关键字   
      attrState: '',             //左下角标签状态
      maxNum: 30,               //不断累加的展示数
      sumNum: 30,              //初始展示数
      tags: false,            //过滤面板显示状态
      type1: 1,              //旗帜类型过滤 side-bar选项
      type2: false,         //旗帜类型过滤2
      type3: false,        //旗帜类型过滤3
      type4: false,       //旗帜类型过滤4
      type5: false,      //旗帜类型过滤5
      flagStyle:[],     //旗帜类型的存放数组
      page: 0,         //当前页面滚动高度
      explain: false, //声明面板的逻辑控制
      buttonInfo: '过滤 简介 : 选择需要过滤的旗帜特征，含有颜色/图形/图案和结构分类',
      buttonInfor: '过滤 简介 : 选择需要过滤的旗帜特征，含有颜色/图形/图案和结构分类'
    }
  }, 
  beforeRouteLeave( to, from, next){
    //离开路由使用page记录当前高度
    this.page = document.querySelector('#views').scrollTop || window.scrollY
    next()
  },
  activated(){
    //返回路由时跳转page记录高度
    window.scrollTo(0, this.page)
  },
  computed:{
    result(){       
      //数据过滤运算
      return (this.$store.state.flags.filter(item=>
      //第一层,数组类型过滤    
          (item.type== this.type1 || item.type== this.type2 || item.type== this.type3 || item.type== this.type4 || item.type== this.type5) && 
          //第二层数组匹配特征过滤
          this.flagStyle.every(itm=>item.code.indexOf(itm)!==-1) &&
          //第三层数组匹配标签过滤
          (item.attr).indexOf(this.attrKey)>-1 &&
          (eval(this.searchkey)).indexOf(this.search)>-1))
          //第四层数组关键字过滤
    },
  },
  methods:{
    iptBlur(e){    
      //点击键盘确定(13按键)时，输入框失去焦点
      e.target.blur()
    },
    cancelkey( msg, e){   
      //从eval字符串中取出关键字
      this.showMsg('取消'+ e +'过滤')
      this.searchkey = this.searchkey.replace( msg, '')
    },
    addkey( msg, e){   
      //向eval字符串中注入关键字
      this.showMsg('增加'+ e +'过滤')
      this.searchkey += msg
    },
    reverseItem(){   
      //向store发出源数组倒序命令
      this.sumNum = this.maxNum
      //重置展示长度
      this.getOut()
      //滚回顶部
      this.$store.commit('reverseItem')
    },
    sendMutation(key){   
      //切换排序方式时，产生提示框，忽略重复请求
      if(this.sortWay === key){
        return
      }else{
        this.getOut()
        //滚回顶部
        this.$store.commit('sortMethod', key)
      }
    },
    clearTag(){      
      //将搜索项重置
      this.$store.commit('clearTag')
    },         
    cancelIpt(){  
      //重置输入框  
      if(this.search){                 
        this.search='' 
        this.showMsg('已清除当前搜索项')
      }           
    },
    showMsg(message){    
      //黑色提示框  
      var div = this.$refs.show
      div.style.display='block'
      this.message = message
      if(this.showTimer){                
        clearTimeout(this.showTimer)
        this.showTimer = setTimeout(()=>{
        this.$refs.show.style.display='none'
        },this.$store.state.time)
      }else{                          
        this.showTimer = setTimeout(()=>{
        this.$refs.show.style.display='none'
        },this.$store.state.time)
      }
    },
    getOut(){         
      //滚回顶部
      document.body.scrollTop = document.documentElement.scrollTop = 0
    },
    stopScroll(){     
      //触发滚动条锁定
      document.body.style.position = "fixed"
    },
    startScroll(){    
      //触发后解除滚动条锁定
      document.body.style.position = "static"
    },
    showMore(){     
      //点击加载更多
      if(this.sumNum < this.result.length){
        this.sumNum += this.maxNum
      }
    },
    init(){    
      //点击初始化搜索项，这段写得太low
      console.log(this.flagStyle)
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
    pageDown(){
      /* 底部翻页功能的触发 */
      if(this.sumNum<this.result.length){
        this.showMore()
      }else{
        this.showMsg('已无更多数据')
      }
    },
    //sumNum<result.length?showMore():showMsg('已无更多数据')
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
    // toDatas(e) {    
    // //跳路由,用的事件托管不知道有没有优化
    //   var tar = e.target
    //   var name = tar.tagName.toLowerCase();
    //   if(name==='img' && tar.getAttribute('data-img')){
    //     var idx = tar.getAttribute('data-img')
    //     // console.log(jump)
    //     this.$router.push({
    //       path: '/datas'
    //     })
    //     this.$store.state.items = this.$store.state.flags[idx]
    //   }
    toDatas(item){
      this.$router.push({
      path: '/datas',   
      })
      this.$store.state.items = item
    },   
    chooseImg(idx, type){    
    //面板选择
      if(typeof this[type] == 'number'){
        this[type] = false
      }else{
        this[type] = idx
      }
    },
  }, 
  //methods尾括号
  filters:{
    numb,
    gdp,
    per
  }      
  //filter尾括号
}       
//配置尾括号
</script>

<style scoped>
@import "../../assets/css/views.css";
/* 单独作用的css */
</style>      
