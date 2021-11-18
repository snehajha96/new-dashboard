import React from 'react'
import '../../scss/card.scss'
 
const CardUser = () => {
    return (
        <div>
             <div className="small-box bg-#91BAC5">
              <div className="inner">
                <h3>44</h3>
                <p>User </p>
              </div>
              <div className="icon ">
              <i class="fas fa-user"></i>
              </div>
              <a href="#" className="small-box-footer ">
                More info <i className="fa fa-arrow-circle-right" />
              </a>
            </div>
        </div>
    )
}

export default CardUser