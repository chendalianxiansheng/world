
//民族构成的echarts表单实现函数

function drawTab1(){
  let chart = this.$echarts.init(document.getElementById('chart1'))
  chart.setOption({
    //提示框内容
    tooltip: {  
      trigger: 'item',
      formatter: '{a} <br/>{b} {c}%',
    },
    //提示框的方位
    legend: {    
      orient: 'vertical',
      left: 10,
      data: this.item.part
    },
    series: [
      {
        name: '人口结构',
        type: 'pie',
        //逆时针
        clockWise: false,   
        //环形的宽度 
        radius: ['50%', '70%'], 
        //环形的空间位置  
        center: ['55%', '48%'],   
        avoidLabelOverlap: false,
        //中央文字的样式
        label: {   
            show: false,
            position: 'center'
        },
        emphasis: {
            label: {
                show: true,
                fontSize: '21',
                fontWeight: 'bold'
            }
        },
        labelLine: {
            show: false
        },
        //使用merge，两条资料合并后的内容
        data: this.merge
      }
    ]
  })
}

export { 
  drawTab1
} 