import React from "react";

 import './layout.css'

import Header from "../component/headerComponent/Header";
import SideBar from "../component/sideBar_Component/SideBar";
import Content from "../component/contentComponent/Content"
import Footer from "../component/footer/footer";

const Layout = () => {
  return (
    <div className = "wrapper">
        
      <div className="header">
      <Header/>
      </div>
      <div className="sidebar">
        <SideBar/>
        </div>
        
        <Content/>
        <Footer/>

    </div>
  );
};

export default Layout;
