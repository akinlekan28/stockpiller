import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Homepage from "./pages/homepage/Homepage";
import Login  from "./pages/auth/Login";
import Signup from './pages/auth/Signup'
import Forgot from "./pages/auth/Forgot";
import Home from "./pages/home/Home";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <ToastContainer autoClose={4000} />
          <Route exact path="/" component={Homepage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/reset" component={Forgot} />
          <Route exact path="/home" component={Home} />
        </Router>
      </Provider>
    );
  }
}

export default App;
