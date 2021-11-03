import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
const StackedGuage = (props) => {
    const gaugeOptions = {
        chart: {
          type: 'solidgauge'
        },
      
        title: null,
      
        pane: {
          center: ['50%', '85%'],
          size: '140%',
          startAngle: -90,
          endAngle: 90,
          background: {
            backgroundColor:
              Highcharts.defaultOptions.legend.backgroundColor || '#EEE',
            innerRadius: '60%',
            outerRadius: '100%',
            shape: 'arc'
          }
        },
      
        exporting: {
          enabled: false
        },
      
        tooltip: {
          enabled: false
        },
      
        // the value axis
        yAxis: {
          stops: [
            [0.1, '#55BF3B'], // green
            [0.5, '#DDDF0D'], // yellow
            [0.9, '#DF5353'] // red
          ],
          lineWidth: 0,
          tickWidth: 0,
          minorTickInterval: null,
          tickAmount: 2,
          title: {
            y: -70
          },
          labels: {
            y: 16
          }
        },
      
        plotOptions: {
          solidgauge: {
            dataLabels: {
              y: 5,
              borderWidth: 0,
              useHTML: true
            }
          }
        }
      };
      const chartRpm = Highcharts.chart('container', Highcharts.merge(gaugeOptions, {
        chart: {
            renderTo: 'container',
        }, 
        yAxis: {
          min: props.min,
          max: props.max,
          title: {
            text: props.title
          }
        },
      
        series: [{
            name: 'RPM',
            data: [1],
            dataLabels: {
              format:
                '<div style="text-align:center">' +
                '<span style="font-size:25px">{y:.1f}</span><br/>' +
                '<span style="font-size:12px;opacity:0.4">' +
                '* 1000 / min' +
                '</span>' +
                '</div>'
            },
            tooltip: {
              valueSuffix: ' revolutions/min'
            }
          }]
      
      }));
    return (
        <div id="container">
             <HighchartsReact highcharts={Highcharts} options={chartRpm} />
        </div>
    )
};

export default StackedGuage;
