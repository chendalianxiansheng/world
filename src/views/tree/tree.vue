<template>
  <div id="tree">
    <tree-top></tree-top>
    <div id="tree-content">
      <el-timeline>
        <el-timeline-item v-for="(item, index) in timeline"
        placement="top"
        :key="index"
        :color="item.color"
        :timestamp="item.timestamp"
        >
          <img :src="item.src" alt="">
          <img :src="item.src1" alt="">
          <h5>{{item.name}}</h5>
          <h6>{{item.place}}</h6>
          <p>{{item.content}}</p>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>
<script>

import treeTop from '../../components/tree/treeTop'

export default {
  name:'tree',
  components:{
    treeTop
  },
  data(){
    return {
      timeline:[{
          timestamp: 'BC 3500年',
          name:'苏美尔文明',
          place: '今 伊拉克 美索不达米亚平原',
          content: '苏美尔人在 两河流域（幼发拉底河与底格里斯河河畔）建立了聚居的城邦，同时期产生了楔形文字，第一代人类文明诞生',
          type: 'cvlz',
          color: 'orange',
          src: require('../../../public/img/flag/YLK.png'),
        },
        {
          timestamp: 'BC 3100年',
          name:'古埃及文明',
          place: '今 埃及 开罗',
          content: '由 纳尔迈 Nermer（又称美尼斯）统一上下埃及建立了古埃及第一王朝，都城位于 孟菲斯。早王朝时期开始',
          type: 'cvlz',
          color: 'orange',
          src: require('../../../public/img/flag/AJ.png'),
        },
        {
          timestamp: 'BC 2900年',
          name:'苏美尔文明',
          place: '今 伊拉克 美索不达米亚平原',
          content: '苏美尔文明进入城邦争霸阶段',
          type: 'war',
          color: 'red',
          src: require('../../../public/img/flag/YLK.png'),
        },
        {
          timestamp: 'BC 2070年',
          name: '中国文明',
          place: '今 中国 黄河流域',
          content: '大禹之子 启，建立夏朝（真实性存疑）',
          type: 'cvlz',
          color: 'orange',
          src: require('../../../public/img/flag/ZG.png'),
        },
        {
          timestamp: 'BC 1600年',
          name: '中国文明',
          place: '今 中国 河南商丘',
          content: '夏朝方国：商国君主 汤，于鸣条之战（具体地址有争议）击败夏朝君主 桀，建立商朝。定都亳（今河南商丘）商朝使用象形文字 甲骨文，主流学界认为商代为中国文明肇基之始',
          type: 'cvlz',
          color: 'orange',
          src: require('../../../public/img/flag/ZG.png'),
        },
        {
          timestamp: 'BC 1420年 - BC 1300年',
          name: '中国文明',
          place: '今 中国 河南 / 河北一代',
          content: '因商朝世衰，王室内发夺权，废立加剧。动乱历经 仲丁、外壬、河亶甲、祖乙、祖辛、沃甲、祖丁、南庚、阳甲 九代君王，史称九世之乱，此间国都频繁迁移',
          type: 'cvlz',
          color: 'orange',
          src: require('../../../public/img/flag/ZG.png'),
        },
        {
          timestamp: 'BC 约1300年',
          name: '中国文明',
          place: '今 中国 河南安阳',
          content: '商王 盘庚 迁都于殷（今河南安阳）商朝摆脱混乱时期，自此大定，直至灭亡，史称盘庚迁殷',
          type: 'cvlz',
          color: 'orange',
          src: require('../../../public/img/flag/ZG.png'),
        },
        {
          timestamp: 'BC 1046年',
          name: '中国文明',
          place: '今 中国 河南鹤壁-淇县',
          content: '周人于周原兴起（今陕西宝鸡一代）并与 商王帝辛，决战于牧野，史称牧野之战。纣王兵败自焚于朝歌城（殷商陪都 今河南鹤壁-淇县）商朝灭亡',
          type: 'war',
          color: 'red',
          src: require('../../../public/img/flag/ZG.png'),
        },
        {
          timestamp: 'BC 1046年',
          name: '中国文明',
          place: '今 中国 陕西西安',
          content: '周武王 姬发 灭商建立周朝，定都镐京（今陕西西安）设东都雒邑（今河南洛阳），分别称为 宗周 与 成周',
          type: 'cvlz',
          color: 'orange',
          src: require('../../../public/img/flag/ZG.png'),
        },
        {
          timestamp: 'BC 1043年',
          name: '中国文明',
          place: '今 中国 河南安阳',
          content: '周武王早逝，成王年幼，周公旦摄政。纣王之子武庚与殷商王畿三监（制衡殷商遗民的三国诸侯）发动叛乱，被周公东征平定。史称三监之乱，殷商遗民被迁往故地商丘，分封纣王长兄 微子启 为宋国国君',
          type: 'war',
          color: 'red',
          src: require('../../../public/img/flag/ZG.png'),
        },
        {
          timestamp: 'BC 896年',
          name: '中国文明',
          place: '今 中国 陕西咸阳-兴平市 东南',
          content: '周懿王 姬囏时期，国力日衰，戎狄多次进犯（称为北狄和西戎，实为多股外族部落），周朝被迫迁都于犬丘（今陕西咸阳兴平市）并改都城名为 槐里',
          type: 'cvlz',
          color: 'orange',
          src: require('../../../public/img/flag/ZG.png'),
        },
        {
          timestamp: 'BC 891年',
          name: '中国文明',
          place: '今 中国 陕西西安',
          content: '周懿王死后，姬辟方 以次子身份被拥立为周王（主战派），是为周孝王。以六师攻伐戎狄，迫使对方求和。回迁宗周，周王朝短暂中兴',
          type: 'war',
          color: 'red',
          src: require('../../../public/img/flag/ZG.png'),
        },
        {
          timestamp: 'BC 842年',
          name: '中国文明',
          place: '今 中国 山西临汾-霍州',
          content: '因 周厉王姬胡 狂悖专制，引发国人暴动（国都平民）周厉王逃亡彘地（今山西临汾-霍州）周公与召公代理执政，号：共和，史称共和行政。周厉王在 彘地 死于前829年，周王室开始衰落',
          type: 'cvlz',
          color: 'orange',
          src: require('../../../public/img/flag/ZG.png'),
        },
        {
          timestamp: 'BC 771年',
          name: '中国文明',
          place: '今 中国 陕西西安',
          content: '犬戎攻灭镐京，周王姬宫湦 身死国灭，西周结束，历十二世，谥号幽王。幽王之子 周平王姬宜臼 迁都成周（今河南洛阳）史称平王东迁，进入春秋与东周时期。秦襄公因护送平王有功，由子爵擢为伯爵，并许以宗周封地（已被戎狄占领）',
          type: 'cvlz',
          color: 'orange',
          src: require('../../../public/img/flag/ZG.png'),
        },
        {
          timestamp: 'BC 750年',
          name: '中国文明',
          place: '今 中国 河南三门峡',
          content: '诸侯分别扶立 周平王宜臼 与 周携王余臣，并形成二王并立，其中虢国拥戴携王日趋壮大，引发诸侯纷争，被晋文侯攻灭，并击杀携王',
          type: 'war',
          color: 'red',
          src: require('../../../public/img/flag/ZG.png'),
        },
        {
          timestamp: 'BC 750年',
          name: '中国文明',
          place: '今 中国 河南三门峡',
          content: '诸侯分别扶立 周平王宜臼 与 周携王余臣，并形成二王并立，其中虢国拥戴携王日趋壮大，引发诸侯纷争，被晋文侯攻灭，并击杀携王',
          type: 'war',
          color: 'red',
          src: require('../../../public/img/flag/ZG.png'),
        },
        {
          timestamp: 'BC 707年',
          name: '中国文明',
          place: '今 中国 河南许昌-长葛',
          content: '宗室诸侯（拱卫王畿的同宗）郑庄公姬寤生 因不再尊奉周天子，双方激发矛盾。周桓王姬林 率多路诸侯讨伐郑国，两军战于繻葛，史称繻葛之战。王室大败，郑国军队箭射周王，周王肩部中箭。这一标志性事件代表周王室的彻底衰落',
          type: 'war',
          color: 'red',
          src: require('../../../public/img/flag/ZG.png'),
        },
        {
          timestamp: 'BC 679年',
          name: '中国文明',
          place: '今 中国 山东菏泽-鄄城县',
          content: '齐桓公姜小白 任用管仲励精图治，以 尊王攘夷 为号，讨伐进犯中原的戎狄，史称 九合诸侯，一匡天下。成为天下霸主，齐桓公与四方诸侯于鄄地会盟，势力达到极盛。也开启了诸侯争霸的先例',
          type: 'cvlz',
          color: 'orange',
          src: require('../../../public/img/flag/ZG.png'),
        },
        {
          timestamp: 'BC 632年',
          name: '中国文明',
          place: '今 中国 山东菏泽-鄄城县 西南',
          content: '晋文公姬重耳 与 楚成王 两军爆发了城濮之战，晋军以少胜多，阻止了楚国北进的势头，就此奠定了晋国与楚国两个超级大国的对峙形势。晋文公成为春秋时期的第二代霸主',
          type: 'war',
          color: 'red',
          src: require('../../../public/img/flag/ZG.png'),
        },
        
        




        {
          timestamp: '年',
          place: '',
          content: '',
          type: 'politics',
          color: 'red',
          src: require('../../../public/img/flag/YLK.png'),
        },
      ]
    }
  },
  computed:{
    result(){
    }
  }
}
</script>


<style> 
#tree{
  width: 100%;
  height: auto;
  background: whitesmoke;
  /* background: url('../../assets/img/viewImg/AJBG.png'); */
}

.el-timeline{
  padding: 60px 15px;
  background: whitesmoke;
  color: white;
  text-align: left;
  margin-left: 15%;
  transition: 1s all ease;
}
.el-timeline p{
  color: gray;
  font-size: 12px;
  padding: 3px 0px;
  /* padding-bottom: 10px; */
}
.el-timeline img{
  height: 45px;
  vertical-align: middle;
}
.el-timeline img:nth-child(2n){
  margin-left: 10px;
}
.el-timeline h6{
  font-weight: 700;
  font-size: 10px;
  padding: 5px 0;
  margin: 0;
}
.el-timeline h5{
  padding: 5px 0 0 0;
  margin: 0;
  color: red;
}
</style>