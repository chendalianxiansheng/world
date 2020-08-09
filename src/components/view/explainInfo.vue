
<!-- Views路由的问号点击子组件，声明应用信息 -->

<template>
  <div id="exp-in">
    <p class="explain-p">
      本功能为个人开发，包含数据可能不精确，仅供参考，不建议引用。主要信息取材于百度与维基百科。部分经济资料来源于快易数据，时间为2018年（极少内容为其他年份）
    </p>
    <img src="../../../public/img/bg/bd.png" alt="百度百科">
    <img src="../../../public/img/bg/WJ.png" alt="维基百科">
    <p class="explain-p">
      页面布局与图标/图案为个人设计，其中 国旗和国徽图像下载于维基百科，已进行压缩处理，欢迎在gitHub中取用
    </p>
    <img src="../../../public/img/bg/gt.png" alt="gitHub"><br>
    <a :href="link" target="_blank">https://github.com/chendalianxiansheng/world</a>
    <p class="explain-p">
      如遇到严重错误或提出建议，欢迎与本人联系反馈，<span>微信账号：chenhanyu1991</span>
    </p>
    <img src="../../../public/img/bg/wx1.png" alt="微信名称：岂不美哉" id="img-bottom-left">
    <img src="../../../public/img/bg/wx.png" alt="微信：chenhanyu1991" id="img-bottom-right">
  </div>
</template>

<script>
export default {
  name: 'explainInfo',
  data() {
    return {
      link:'https://github.com/chendalianxiansheng/world'
    };
  },
}
</script>

<style scoped>
#exp-in>.explain-p{
  /* 父元素下的所有p标签文字 */
  font-size: 10px;
  color: #333333;
  padding: 12px 5%;
  text-align: start;
  text-indent: 2em;
}
#exp-in>img{
  /* 父元素下的所有图片 */
  width: 20vmin;
  padding: 0 3%;
  transition: all ease 0.2s;
}
#exp-in>img:active{
  /* 所有图片的点击效果 */
  position: relative;
  transform: scale(1.1);
}
#exp-in>a{
  /* github a链接的样式 */
  font-size: 9px;
  line-height: 9px;
  text-decoration: underline;
}
#exp-in>p>span{
  /* 红色字体 */
  color: #db4137;
  font-weight: 700;
}
#img-bottom-left{
  /* 底部左右两个图片 */
  width: 15vmin !important;
}
#img-bottom-right{
  width: 15vmin !important;
  border-radius: 50%;
}
</style>
