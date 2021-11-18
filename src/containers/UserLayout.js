import React from "react";
import Mainnav from "./Mainnav";
import UserSidenav from "./UserSidenav";
import Content from "./Content";
import Footer from "./Footer";

import { BrowserRouter as Router } from "react-router-dom";

const UserLayout = () => {
  return (
    <div className="c-app c-default-layout">
      <Router>
        <UserSidenav />
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

export default UserLayout;
