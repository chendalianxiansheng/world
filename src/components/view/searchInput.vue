
<!-- Views路由标题栏的整体组件 -->

<template>
  <div id="search">
    <div id="search-bg">
      <span class="shadowFont">#旗帜：检索</span>
      <!-- 虚幻字体 -->
      <div id="search-count">收录数量：{{$store.state.flags.length}}</div>
      <p class="title">▼ 检索项</p>
    </div>
    <div id="search-content">
      <slot name="search"></slot>
      <span @click="sendClick">×</span>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'searchInput',
  data() {
    return {
    };
  },
  methods:{
    sendClick(){
      this.$emit('sendClick')
    }
  }
}
</script>

<style scoped>
#search{
  /* 被固定在顶层的标题栏 */
  width: 100%;
  height: 66px;
  background: whitesmoke;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
}
#search-bg{
  /* 带有底色的标题栏 */
  width: 100%;
  height: 30px;
  background: var(--tag);
  background-size: 50px;
  overflow: hidden;
}
#search-count{
  font-size: 11px;
  position: absolute;
  color: rgba(255, 255, 255, 0.85);
  left: 2%;
  top: 14px;
}
#search-content{
  /* 标题栏底部 */
  cursor: pointer;
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid whitesmoke;
}
#search-content input[type="text"]{  
  /* 顶部搜索框 */
  width: 22%;
  padding-left: 8px;
  margin-left: 1%;
}
#search-content span{
  /* 顶部选项菜单默认字体 */
  position: absolute;
  left: 21.5%;
  font-size: 16px;
  line-height: 25px;
  /* padding: 5px 5px; */
  color: #757575;
  user-select: none;
}
#search-content span:active{
  /* 顶部选项菜单激活效果 */
  transform: scale(1.3);
  transition: all ease 0.1s;
}
</style>
