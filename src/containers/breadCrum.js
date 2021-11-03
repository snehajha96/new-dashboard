import React from "react";
import './../scss/BreadCrum.scss'



const breadCrum = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8 col-lg-5 shadow-sm p-3 mb-5 bg-white rounded">
          <h2> Basic Breadcrum</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item active" aria-current="page">
                Home
              </li>
            </ol>
          </nav>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Library
              </li>
            </ol>
          </nav>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Library</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Data
              </li>
            </ol>
          </nav>
        </div>
      
      {/* breadcrum with color */}
      
        <div className="col-sm-8 col-lg-5 shadow-sm p-3 ml-lg-3 mb-5 bg-white rounded">
          <h2> Breadcrum with color and arrow divider</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item bc-item active" aria-current="page">
                Home
              </li>
            </ol>
          </nav>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item bc-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item bc-item active" aria-current="page">
                Library
              </li>
            </ol>
          </nav>
          <nav aria-label="breadcrumb" className="bg-jaffa">
            <ol className="breadcrumb">
              <li className="breadcrumb-item bc-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item bc-item">
                <a href="#">Library</a>
              </li>
              <li className="breadcrumb-item bc-item active" aria-current="page">
                Data
              </li>
            </ol>
          </nav>
        </div>
      
 {/* breadcrum withou divider */}
      
        <div className="col-sm-8 col-lg-5 shadow-sm p-3 mb-5 bg-white rounded">
          <h2> Breadcrum with out divider</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item no-divider active" aria-current="page">
                Home
              </li>
            </ol>
          </nav>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item no-divider">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item no-divider active" aria-current="page">
                Library
              </li>
            </ol>
          </nav>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item no-divider">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item no-divider">
                <a href="#">Library</a>
              </li>
              <li className="breadcrumb-item no-divider active" aria-current="page">
                Data
              </li>
            </ol>
          </nav>
        </div>
      </div>
      </div>
  );
};

export default breadCrum;
