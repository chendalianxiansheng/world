
//共用的过滤器

function numb(data){     
  //文字过滤器
  if(data>10000 && data<100000000){
    return data/10000+'万'
  }else if(data>100000000){
    return data/100000000+'亿'
    }else{
    return data
  }
}
function gdp(data){     
  //文字过滤器2
  if(data===0){
    return '数据暂无'
  }else if(data>10000){
    return data/10000+'万亿'
  }else{
    return data+'亿'
  }
}
function per(data){
  //人均收入文字过滤器
  if(data){
    return data+'美元'
  }else{
    return '无法计算'
  }
}
function typeName(data){
  switch (data) {
    case 1:
      return '国家';
      break;
    case 2:
      return '地区'
      break;
    default:
      break;
  }
}

export {
  typeName as typeName,
  numb as numb,
  gdp as gdp,
  per as per 
<<<<<<< HEAD
}
=======
}
>>>>>>> dev
