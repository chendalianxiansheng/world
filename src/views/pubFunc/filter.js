
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

export {
  numb as numb,
  gdp as gdp,
  per as per
}



// numb(data){     
//   //文字过滤器
//     if(data>10000 && data<100000000){
//       return data/10000+'万'
//     }else if(data>100000000){
//       return data/100000000+'亿'
//      }else{
//       return data
//     }
//   },
//   gdp(data){     
//   //文字过滤器2
//     if(data===0){
//       return '数据暂无'
//     }else if(data>10000){
//       return data/10000+'万亿'
//     }else{
//       return data+'亿'
//     }
//   },
//   per(data){
//   //人均收入文字过滤器
//     if(data){
//       return data+'美元'
//     }else{
//       return '无法计算'
//     }
//   },