import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
const Funnel = (props) => {
    return (
        <div id="chart">
        <HighchartsReact highcharts={Highcharts} options={props.options} />
      </div>
    )
};

export default Funnel;
