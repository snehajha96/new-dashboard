import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.scss';

import './scss/styles.scss';

import Login from './views/auth/login';
import Register from './views/auth/signup';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)
// Containers
const Layout = React.lazy(() => import('./containers/layout'));

class App extends Component {
  render() {
    return (
      <HashRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route exact path="/login" name="Login Page" render={props => <Login {...props} />} />
            <Route exact path="/signup" name="Register Page" render={props => <Register {...props} />} />
            <Route exact path="/dashboard" name="Dashboard Page" render={props => <Layout {...props} />} />
            <Redirect from="/" to="/login" />
            <Route path="/" name="Home" render={props => <Login {...props} />} />
          </Switch>
        </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
