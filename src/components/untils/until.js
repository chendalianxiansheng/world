
//负责页面的通用功能，如防抖等
    
function showMsg(message){      
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
}


export{
  showMsg as showMsg
}