import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
//import Waterfall from '../../containers/Waterfall'

const LineChartOptions = {
  title: {
    text: 'Line chart'
  },
  xAxis: {
    lineWidth: 0,
    gridLineWidth: 0,
    gridLineColor: 'transparent',
    lineColor: 'none',   
    visible: false,    
    labels: {
        enabled: false
    },
    minorTickLength: 0,
    tickLength: 0,
    visible: 0,
    categories: ['January', 'February', 'March', 'April', 'May', 'June']
  },
  colors: ['#ED7D31', '#199AB7'],
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

const LineChart = () => (
    <div className="section mb-3 ">
        {/* <h3 className="section-title">Line Chart</h3> */}
        <div className="section-content">
          <HighchartsReact
            highcharts={Highcharts}
            options={LineChartOptions}
          />
        </div>
      </div>
)

export default LineChart