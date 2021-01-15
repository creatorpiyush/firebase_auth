import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import ForgetPassword from "./components/ForgetPassword";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Signup from "./components/Signup";
import UpdateProfile from "./components/UpdateProfile";
import { AuthProvider } from "./config/authContext";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Router>
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path="/" component={Dashboard} />
                <PrivateRoute
                  path="/update-profile"
                  component={UpdateProfile}
                />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/forget-password" component={ForgetPassword} />
              </Switch>
            </AuthProvider>
          </Router>
        </header>
      </div>
    );
  }
}

export default App;
