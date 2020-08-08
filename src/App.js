import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import setAuthToken from './utils/setAuthToken'
import jwt_decode from 'jwt-decode'
import { setCurrentUser, logoutUser } from './store/actions/authActions'
import PrivateRoute from './components/common/PrivateRoute'
import Homepage from './pages/homepage/Homepage'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import Forgot from './pages/auth/Forgot'
import Home from './pages/home/Home'
import Plans from './pages/plans/Plans'
import ViewPlans from './pages/plans/ViewPlans'
import NewPlan from './pages/plans/NewPlan'
import CreatePlan from './pages/plans/CreatePlan'
import Transactions from './pages/transactions/Transactions'
import Withdraw from './pages/withdraw/Withdraw'
import Dashboard from './pages/dashboard/Dashboard'
import Cards from './pages/cards/Cards'
import EditPlan from './pages/plans/EditPlan'
import Settings from './pages/settings/Settings'
import ChangePassword from './pages/settings/ChangePassword'
import Terms from './pages/terms/Terms'
import Privacy from './pages/terms/Privacy'
// import AOS from "aos";
// import "aos/dist/aos.css";

//check for token
if (localStorage.jwtToken) {
  //set auth token header auth
  setAuthToken(localStorage.jwtToken)
  //decode token and get user info
  const decoded = jwt_decode(localStorage.jwtToken)
  //set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded))
  //check for expired token
  if (Date.now() >= decoded.exp * 1000) {
    // Logout user
    store.dispatch(logoutUser())

    // Redirect to login
    window.location.href = '/'
  }
}

class App extends Component {
  // componentDidMount() {
  //   AOS.init({
  //     duration: 2000,
  //   });
  //   AOS.refresh();
  // }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <ToastContainer autoClose={4000} />
          <Route exact path="/" component={Homepage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/reset" component={Forgot} />
          <Route exact path="/terms" component={Terms} />
          <Route exact path="/privacy" component={Privacy} />
          <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
          <Switch>
            <PrivateRoute exact path="/home" component={Home} />
          </Switch>

          <Switch>
            <PrivateRoute exact path="/plans" component={Plans} />
          </Switch>
          <Switch>
            <Route exact path="/viewplan/:id" component={ViewPlans} />
          </Switch>
          <Switch>
            <PrivateRoute exact path="/plan/new" component={NewPlan} />
          </Switch>
          <Switch>
            <PrivateRoute
              exact
              path="/plan/create/:type"
              component={CreatePlan}
            />
          </Switch>
          <Switch>
            <PrivateRoute exact path="/editplans/:id" component={EditPlan} />
          </Switch>
          <Switch>
            <PrivateRoute exact path="/transactions" component={Transactions} />
          </Switch>
          <Switch>
            <PrivateRoute exact path="/withdraw" component={Withdraw} />
          </Switch>
          <Switch>
            <PrivateRoute exact path="/cards" component={Cards} />
          </Switch>
          <Switch>
            <PrivateRoute exact path="/settings" component={Settings} />
          </Switch>
          <Switch>
            <PrivateRoute
              exact
              path="/change-password"
              component={ChangePassword}
            />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App
