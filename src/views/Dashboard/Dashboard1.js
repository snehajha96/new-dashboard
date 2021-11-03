import React from "react";
import MapLeaflet from "../../containers/maps/LeafletMap";
import CardShopping from '../../containers/cards/cardShopping'
import CardChart from '../../containers/cards/cardChart'
import CardUser from '../../containers/cards/cardUser'
import CardUniqe from '../../containers/cards/cardUniqe'
import Calender from '../../containers/Calender'
import LineChart from '../../containers/LineChart'
import Form from '../../containers/Forms'
import Table from '../../containers/Table/Table'

const Dashboard1 = () => {
  return (
      <div >
          <h1 className="mb-3">Dashboard</h1>
        <div className="row">
         <div className="col-lg-3 col-6">
             <CardShopping/>
         </div>
         <div className="col-lg-3 col-6">
             <CardChart/>
         </div> 
          <div className="col-lg-3 col-6">
             <CardUser/>
         </div>
         <div className="col-lg-3 col-6">
             <CardUniqe/>
         </div>
      </div>``
      <div className="row">
     <section className="col-lg-6">
     <div >
              <MapLeaflet/>
          </div>
          <div className="mt-3"> 
             <LineChart/>
           </div>
         
     </section>
     <section className="col-lg-6">
       <div className="overflow-auto bg-white" style={{height:"450px"}}>
            
             <Form/>
            
       </div>
          
        <div  style={{height:"390px"}}>
             <Calender/>
        </div>
         
     </section>
     
      {/* <div className="row">
      <div className="col-lg-6 h-50">
              <MapLeaflet/>
          </div>

          <div className ="col-lg-6 "> 
             <LineChart/>
           </div>
         
      </div> */}
      <section className="col-sm-12 mt-3">
      <div >
          <div className="pb-2 shadow bg-white rounded">
            <Table/>
          </div>
      </div>
      </section>
      {/* <div className="row justify-content-between ">
           
         <div className="col-lg-6 mt-3">
             <div className="overflow-auto h-50">
             <Form/>
             </div>

        </div> 
        <div className="col-lg-6 ">
             <Calender/>
             </div>
      </div> */}
      </div>
      </div>
  );
};

export default Dashboard1;
