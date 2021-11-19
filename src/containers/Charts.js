import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
//import Waterfall from '../../containers/Waterfall'

const LineChartOptions = {
  title: {
    text: 'Line chart'
  },
  xAxis: {
    categories: ['January', 'February', 'March', 'April', 'May', 'June']
  },
  colors: ['#FCAD37', '#654F73'],
  series: [
    {
      name: 'Sales',
      data: [21, 35, 75, 51, 41, 47]
    },
    {
      name: 'Leads',
      data: [41, 79, 57, 47, 63, 71]
    }
  ],
  credits: {
    enabled: false
  }
}


const BarChartOptions = {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Bar Chart'
  },
  xAxis: {
    categories: ['January', 'February', 'March', 'April', 'May', 'June']
  },
  colors: ['#FCAD37', '#654F73'],
  series: [
    {
      name: 'Sales',
      data: [21, 35, 75, 51, 41, 47]
    },
    {
      name: 'Leads',
      data: [41, 79, 57, 47, 63, 71]
    }
  ],
  credits: {
    enabled: false
  }
}



const options = {
  chart: {
    type: "spline"
  },
  title: {
    text: "Spline chart"
  },
  colors: [ '#FCAD37', '#FCAD37', '#FCAD37', '#FCAD37', '#FCAD37', '#FCAD37'],
  series: [
    {
      data: [1, 2, 1, 4, 3, 6]
    }
  ]

  
};

const otptions = {
    chart: {
      type: "pie"
    },
    title: {
      text: "Pie chart"
    },
    colors: [ '#FCAD37', '#654F73','#91BAC5'],
  
  series: [
    {
      data: [1, 2, 1]
    }
  ]

  
};

const stacked = {
  chart: {
    type: 'column'
},
title: {
    text: 'Stacked column chart'
},
colors: [ '#654F73', '#FCAD37', '#91BAC5', '#FFC000', '#084056', '#0AFFF0'],
xAxis: {
    categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
},
yAxis: {
    min: 0,
    title: {
        text: 'Total fruit consumption'
    },
    stackLabels: {
        enabled: true,
        style: {
            fontWeight: 'bold',
            color: ( // theme
                Highcharts.defaultOptions.title.style &&
                Highcharts.defaultOptions.title.style.color
            ) || 'gray'
        }
    }
},
legend: {
    align: 'right',
    x: -30,
    verticalAlign: 'top',
    y: 25,
    floating: true,
    backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || 'white',
    borderColor: '#CCC',
    borderWidth: 1,
    shadow: false
},
tooltip: {
    headerFormat: '<b>{point.x}</b><br/>',
    pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
},
plotOptions: {
    column: {
        stacking: 'normal',
        dataLabels: {
            enabled: true
        }
    }
},
series: [{
    name: 'John',
    data: [5, 3, 4, 7, 2]
}, {
    name: 'Jane',
    data: [2, 2, 3, 2, 1]
}, {
    name: 'Joe',
    data: [3, 4, 4, 2, 5]
}]
    }







    const circle={
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
    },
    title: {
        text: 'Browser<br>shares<br>2017',
        align: 'center',
        verticalAlign: 'middle',
        y: 60
    },
    colors: [ '#654F73', '#FCAD37', '#91BAC5', '#FFC000', '#654F73', '#0AFFF0'],
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                distance: -50,
                style: {
                    fontWeight: 'bold',
                    color: 'white'
                }
            },
            startAngle: -90,
            endAngle: 90,
            center: ['50%', '75%'],
            size: '110%'
        }
    },
    series: [{
        type: 'pie',
        name: 'Browser share',
        innerSize: '50%',
        data: [
            ['Chrome', 58.9],
            ['Firefox', 13.29],
            ['Internet Explorer', 13],
            {
                name: 'Other',
                y: 7.61,
                dataLabels: {
                    enabled: false
                }
            }
        ]
    }]
    }

const stackedd={

    chart: {
      type: 'bar'
  },
  title: {
      text: 'Stacked bar chart'
  },
  colors: [ '#654F73', '#FCAD37', '#91BAC5', '#FFC000', '#084056', '#0AFFF0'],
  xAxis: {
      categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
  },
  yAxis: {
      min: 0,
      title: {
          text: 'Total fruit consumption'
      }
  },
  legend: {
      reversed: true
  },
  plotOptions: {
      series: {
          stacking: 'normal'
      }
  },
  series: [{
      name: 'John',
      data: [5, 3, 4, 7, 2]
  }, {
      name: 'Jane',
      data: [2, 2, 3, 2, 1]
  }, {
      name: 'Joe',
      data: [3, 4, 4, 2, 5]
  }]
}






export default function HighchartsReactWrapper() {
  return (
    <div className="row px-3 rounded">
      <div className="col-md-12">
        {/* <h2>Hightcharts charts with highcharts-react</h2> */}
      </div>

      <div className="section mb-3 col-md-6 ">
        {/* <h3 className="section-title">Line Chart</h3> */}
        <div className="section-content">
          <HighchartsReact
            highcharts={Highcharts}
            options={LineChartOptions}
          />
        </div>
      </div>

      <div className="section mb-3 col-md-6">
        {/* <h3 className="section-title">Bar Chart</h3> */}
        <div className="section-content">
          <HighchartsReact
            highcharts={Highcharts}
            options={BarChartOptions}
          />
        </div>
      </div>

      <div className="section mb-3 col-md-6">
        {/* <h3 className="section-title">Spline Chart </h3> */}
        <div className="section-content">
        <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
      </div>


      <div className="section mb-3 col-md-6">
        {/* <h3 className="section-title">Pie Chart</h3> */}
        <div className="section-content">
          <HighchartsReact
            highcharts={Highcharts}
            options={otptions}
          />
        </div>
      </div>
     
      <div className="section mb-3 col-md-6">
        {/* <h3 className="section-title">Stacked Column Chart</h3> */}
        <div className="section-content">
          <HighchartsReact
            highcharts={Highcharts}
            options={stacked}
          />
        </div>
      </div>
     
      <div className="section mb-3 col-md-6">
        {/* <h3 className="section-title">Semi Circle Chart</h3> */}
        <div className="section-content">
          <HighchartsReact
            highcharts={Highcharts}
            options={circle}
          />
        </div>
      </div>
      <div className="section mb-3 col-md-6">
        {/* <h3 className="section-title">Stacked Bar Chart</h3> */}
        <div className="section-content">
          <HighchartsReact
            highcharts={Highcharts}
            options={stackedd}
          />
        </div>
      </div>
      <div>
      </div>

      {/* <div className="section col-md-6">
        <h3 className="section-title">Stacked Bar Chart</h3>
        <div className="section-content">
          <HighchartsReact
            highcharts={Highcharts}
            options={stackedd}
          />
        </div>
      </div> */}
     
    </div>
    
  )
}
