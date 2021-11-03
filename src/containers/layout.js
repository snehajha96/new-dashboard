import React from 'react';
import Mainnav from './Mainnav';
import Sidenav from './Sidenav';
import Content from './Content';
import Footer from './Footer';

import { BrowserRouter as Router } from 'react-router-dom';

const Layout = () => {

  return (
    <div className="c-app c-default-layout">
      <Router>
        <Sidenav />
        <div className="c-wrapper">
          <Mainnav />
          <div className="c-body">
            <Content />
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  )
}

export default Layout;
