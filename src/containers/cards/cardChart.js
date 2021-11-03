import React from 'react'
import '../../scss/card.scss'
 
const CardChart = () => {
    return (
        <div>
             <div className="small-box bg-success">
              <div className="inner">
                <h3>53%</h3>
                <p>Bounce Rate</p>
              </div>
              <div className="icon ">
              <i class="fas fa-chart-bar"></i>
              </div>
              <a href="#" className="small-box-footer ">
                More info <i className="fa fa-arrow-circle-right" />
              </a>
            </div>
        </div>
    )
}

export default CardChart
