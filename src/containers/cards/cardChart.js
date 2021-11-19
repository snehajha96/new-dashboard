import React from 'react'
import '../../scss/card.scss'
 
const CardChart = () => {
    return (
        <div>
             <div className="small-box">
              <div className="inner bounce">
                <h3>53%</h3>
                <p>Bounce Rate</p>
              </div>
              <div className="icon ">
              <i className="fas fa-chart-bar"></i>
              </div>
              <a href="#" className="small-box-footer bounce">
                More info <i className="fa fa-arrow-circle-right" />
              </a>
            </div>
        </div>
    )
}

export default CardChart
