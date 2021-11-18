import React from "react";
import Mainnav from "./Mainnav";
import Content from "./Content";
import Footer from "./Footer";
import CustomerSidenav from "./CustomerSideNav";

import { BrowserRouter as Router } from "react-router-dom";

const CustomerLayout = () => {
  return (
    <div className="c-app c-default-layout">
      <Router>
        <CustomerSidenav />
        <div className="c-wrapper">
          <Mainnav />
          <div className="c-body">
            <Content />
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default CustomerLayout;
