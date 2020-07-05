<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="tab-bar-icon"></slot>
    </div>
    <div v-else>
      <slot name="tab-bar-icon-active"></slot>
    </div>
    <div :class="{active:isActive}">
      <slot name="tab-bar-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabBarItem',
  data() {
    return {
    };
  },
  props:{
    path: String
  },
  methods:{
    itemClick(){
      this.$router.replace(this.path)
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path)>-1
    }
  }
}
</script>

<style scoped>
.tab-bar-item{
  flex: 0.25;
  font-size: 11px;
  cursor: pointer;
  color: #AEAAAA;
  z-index: 99;
}
.tab-bar-item img{
  margin-top: 5px;
  height: 25px;
}
.active{
  color: white;
}

</style>
