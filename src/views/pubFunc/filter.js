
function numb(data){
  if(data>10000 && data<100000000){
    return data/10000+'万'
  }else if(data>100000000){
    return data/100000000+'亿'
    }else{
    return data
  }
}

export {
   numb 
} 