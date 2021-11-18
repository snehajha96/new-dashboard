import React, { Component } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.scss";

import "./scss/styles.scss";

import Login from "./views/auth/login";
import Register from "./views/auth/signup";

import { authenticationService } from "./services/authentication.service";
import { Roles } from "./helpers/roles";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);
// Containers
const Layout = React.lazy(() => import("./containers/layout"));
const UserLayout = React.lazy(() => import("./containers/UserLayout"));
const CustomerLayout = React.lazy(() => import("./containers/CustomerLayout"));

class App extends Component {
  //currentUser;
  state = {
    currentUser: "Admin", 
  };

  componentDidMount() {
    authenticationService.currentUser.subscribe((currentUser) => {
      currentUser = currentUser;
      this.setState({
        currentUser: currentUser?.role, 
      });
    });
  }

  render() {
    return (
      <HashRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route
              exact
              path="/login"
              name="Login Page"
              render={(props) => <Login {...props} />}
            />
            <Route
              exact
              path="/signup"
              name="Register Page"
              render={(props) => <Register {...props} />}
            />
            <Route
              exact
              path="/dashboard"
              name="Dashboard Page"
              render={(props) =>
                (this.state.currentUser === Roles.Admin  ?
                  <Layout {...props} /> :
                  this.state.currentUser === Roles.Customer ?
                  <CustomerLayout {...props} /> :
                  this.state.currentUser === Roles.User ?
                  <UserLayout {...props} /> :
                  <Login />
                )
                }
            />
            <Redirect from="/" to="/login" />
            <Route
              path="/"
              name="Home"
              render={(props) => <Login {...props} />}
            />
          </Switch>
        </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
