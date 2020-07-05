<template>
  <div id="search">
    <slot name="search"></slot>
    <span @click="sendClick">×</span>
    <slot></slot>
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
  cursor: pointer;
  width: 100%;
  height: 35px;
  background: whitesmoke;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  z-index: 6666;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid whitesmoke;
}
#search input[type="text"]{  
  outline-style: none;
  border: 1px solid Gainsboro; 
  border-radius: 20px;  
  height: 25px;
  line-height: 25px;
  width: 22%;
  padding-left: 8px;
  margin-left: 1%;
}
#search input[type="text"]:focus{   
  border-color: #DB4137;  
  outline: 0; 
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 10px rgba(219,65,55,.6)
}
#search span{
  position: absolute;
  left: 21.5%;
  font-size: 16px;
  line-height: 25px;
  /* padding: 5px 5px; */
  color: #757575;
  user-select: none;
}
#search span:active{
  transform: scale(1.3);
  transition: all ease 0.1s;
}
</style>
