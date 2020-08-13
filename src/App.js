import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import setAuthToken from './utils/setAuthToken'
import jwt_decode from 'jwt-decode'
import { logoutUser, setCurrentUser } from './store/actions/authActions'
import PrivateRoute from './components/common/PrivateRoute'
import Homepage from './pages/homepage/Homepage'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import Forgot from './pages/auth/Forgot'
import Home from './pages/home/Home'
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
import Plans from './pages/plans/Plans'

import './App.css'

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
  render() {
    return (
      <Provider store={store}>
        <>
          <ToastContainer autoClose={4000} />
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/reset" component={Forgot} />
              <Route exact path="/terms" component={Terms} />
              <Route exact path="/privacy" component={Privacy} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/home" component={Home} />
              <PrivateRoute exact path="/plans" component={Plans} />
              <Route exact path="/viewplan/:id" component={ViewPlans} />
              <PrivateRoute exact path="/plan/new" component={NewPlan} />
              <PrivateRoute
                exact
                path="/plan/create/:type"
                component={CreatePlan}
              />
              <PrivateRoute exact path="/editplans/:id" component={EditPlan} />
              <PrivateRoute
                exact
                path="/transactions"
                component={Transactions}
              />
              <PrivateRoute exact path="/withdraw" component={Withdraw} />
              <PrivateRoute exact path="/cards" component={Cards} />
              <PrivateRoute exact path="/settings" component={Settings} />
              <PrivateRoute
                exact
                path="/change-password"
                component={ChangePassword}
              />
            </Switch>
          </BrowserRouter>
        </>
      </Provider>
    )
  }
}

export default App
