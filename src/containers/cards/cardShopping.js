import React from 'react'
import '../../scss/card.scss'
 
const CardShopping = () => {
    return (
        <div>
             <div className="small-box w-100">
              <div className="inner">
                <h3>150</h3>
                <p>New Orders</p>
              </div>
              <div className="icon ">
                <i className="fas fa-shopping-cart" />
              </div>
              <a href="#" className="small-box-footer ">
                More info <i className="fa fa-arrow-circle-right" />
                 
              </a>
            </div>
        </div>
    )
}

export default CardShopping