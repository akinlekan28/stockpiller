import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Homepage from "./pages/homepage/Homepage";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <ToastContainer autoClose={4000} />
          <Route exact path="/" component={Homepage} />
        </Router>
      </Provider>
    );
  }
}

export default App;
