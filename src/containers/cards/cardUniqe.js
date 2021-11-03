import React from 'react'
import '../../scss/card.scss'
 
const CardUniqe = () => {
    return (
        <div>
             <div className="small-box bg-danger">
              <div className="inner">
                <h3>65</h3>
                <p>Unique Visiter</p>
              </div>
              <div className="icon ">
              <i class="fas fa-chart-pie"></i>
              </div>
              <a href="#" className="small-box-footer ">
                More info <i className="fa fa-arrow-circle-right" />
              </a>
            </div>
        </div>
    )
}

export default CardUniqe