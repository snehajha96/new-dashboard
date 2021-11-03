import React from "react";
import "../scss/card.scss";
// import {Spinner} from 'react-bootstrap'
const Card = () => {
  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col-lg-4 col-xs-6 p-3 shadow-sm p-3 mb-5 bg-white rounded">
            <div className="small-box w-100">
              <div className="inner">
                <h3>150</h3>
                <p>New Orders</p>
              </div>
              <div className="icon ">
                <i className="fa fa-shopping-cart" />
              </div>
              <a href="#" className="small-box-footer ">
                More info <i className="fa fa-arrow-circle-right" />
              </a>
            </div>
          </div>


          <div className="card col-lg-4 col-xs-6 p-3 shadow-sm ml-lg-3 mb-5 bg-white rounded">
            <div className="card-header">Featured</div>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card col-lg-3 col-xs-6 p-3 mx-2 shadow-sm p-3 mb-5 bg-white rounded"
            style={{ width: "18rem" }}
          >
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="card-link">
                Card link
              </a>
              <a href="#" className="card-link">
                Another link
              </a>  
            </div>
          </div>
        
        </div>



{/*     
 <div className="row">
  
      <div className="col-lg-3">
        <div className="card">
          <img className="card-img-top" src="https://picsum.photos/200/301" alt="Card image cap" height="200px" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="card text-center text-white bg-primary mb-3">
          <img className="card-img-top"  src="https://picsum.photos/200/301"  alt="Card image cap" height="200px" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-danger">Go somewhere</a>
          </div>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="card text-white bg-dark mb-3">
          <img className="card-img-top" src="https://picsum.photos/200/300" alt="Card image cap" height="200px" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
</div> */}

        {/* Spinner */}
        <div className="row ">
          <h3>Spinners</h3>
          <div className="col-3 shadow-lg p-3 m-5 bg-white rounded">
            <div className="d-flex justify-content-center p-3">
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </div>
          <div className="col-3 shadow-lg p-3 m-5 bg-white rounded">
            <div className="d-flex justify-content-center p-3 ">
              <button className="btn btn-primary" type="button" disabled>
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                />
                Loading...
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
