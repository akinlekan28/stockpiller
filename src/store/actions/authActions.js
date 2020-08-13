import api from '../../api/api'
import setAuthToken from '../../utils/setAuthToken'
import jwt_decode from 'jwt-decode'
import {
  GET_ERRORS,
  SET_CURRENT_USER,
  GET_SUCCESS,
  CLEAR_ERRORS,
  ADD_USER,
  VIEW_USERS,
  USER_LOADING,
  USER_DATA,
  UPDATE_USER,
  ASSIGN_ROLE,
  UPDATE_PASSWORD,
  REMOVE_USER_LOADING,
} from '../types'
import { persistor } from '../store'

//Register user
export const registerUser = (userData) => (dispatch) => {
  dispatch(clearErrors())
  return api
    .post('/register', userData)
    .then((res) =>
      dispatch({
        type: ADD_USER,
        payload: res.data,
      }),
    )
    .catch((err) => {
      if (err.request && !err.response.data) {
        dispatch(setErrors({ network: 'Check your network connection' }))
      } else {
        dispatch(setErrors(err.response.data))
      }
      dispatch({ type: REMOVE_USER_LOADING })
      setTimeout(() => {
        dispatch(clearErrors())
      }, 5000)
    })
}

export const me = () => (dispatch) => {
  dispatch(setLoading())
  api
    .get('/user')
    .then((res) => dispatch({ type: USER_DATA, payload: res.data.data }))
    .catch((err) => {
      if (err.request && !err.response.data) {
        dispatch(setErrors({ network: 'Check your network connection' }))
      } else {
        dispatch(setErrors(err.response.data))
      }
      dispatch({ type: REMOVE_USER_LOADING })
      setTimeout(() => {
        dispatch(clearErrors())
      }, 5000)
    })
}

//Login user
export const loginUser = (userData) => (dispatch) => {
  dispatch(clearErrors())
  return api
    .post('/login', userData)
    .then((res) => {
      //Save to local storage
      const { token } = res.data.data

      //Set token to local storage
      localStorage.setItem('jwtToken', token)

      //Set auth token to header
      setAuthToken(token)

      //Decode token to get user data
      const decoded = jwt_decode(token)

      //Set current user
      dispatch(setCurrentUser(decoded))
    })
    .catch((err) => {
      if (err.request && !err.response.data) {
        dispatch(setErrors({ network: 'Check your network connection' }))
      } else {
        dispatch(setErrors(err.response.data))
      }
      dispatch({ type: REMOVE_USER_LOADING })
      setTimeout(() => {
        dispatch(clearErrors())
      }, 5000)
      return err
    })
}

//update user
export const updateUser = (userData) => (dispatch) => {
  return api
    .post('/user', userData)
    .then((res) => dispatch({ type: UPDATE_USER, payload: res.data }))
    .catch((err) => {
      if (err.request && !err.response.data) {
        dispatch(setErrors({ network: 'Check your network connection' }))
      } else {
        dispatch(setErrors(err.response.data))
      }
      dispatch({ type: REMOVE_USER_LOADING })
      setTimeout(() => {
        dispatch(clearErrors())
      }, 5000)
    })
}

//change password
export const updatePassword = (passwordData) => (dispatch) => {
  dispatch(setLoading())
  return api
    .post('/update/password', passwordData)
    .then((res) => dispatch({ type: UPDATE_PASSWORD, payload: res.data }))
    .catch((err) => {
      if (err.request && !err.response.data) {
        dispatch(setErrors({ network: 'Check your network connection' }))
      } else {
        dispatch(setErrors(err.response.data))
      }
      dispatch({ type: REMOVE_USER_LOADING })
      setTimeout(() => {
        dispatch(clearErrors())
      }, 5000)
    })
}

//log user out
export const logoutUser = () => (dispatch) => {
  persistor.purge()
  //remove token form localstorage
  localStorage.removeItem('jwtToken')
  //remove auth header for future requests
  setAuthToken(false)
  //set current user to {} which also sets isAuthenticated to false
  dispatch(setCurrentUser({}))
}

//forgot password
export const forgotPassword = (email) => (dispatch) => {
  dispatch(setLoading())
  return api
    .post('/password/forgot', email)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      if (err.request && !err.response.data) {
        dispatch(setErrors({ network: 'Check your network connection' }))
      } else {
        dispatch(setErrors(err.response.data))
      }
      dispatch({ type: REMOVE_USER_LOADING })
      setTimeout(() => {
        dispatch(clearErrors())
      }, 5000)
    })
    .finally(() => dispatch({ type: REMOVE_USER_LOADING }))
}

//set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  }
}

//Set loding state
export const setLoading = () => {
  return {
    type: USER_LOADING,
  }
}

//Clear Error
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  }
}

//Set error
export const setErrors = (error) => {
  return {
    type: GET_ERRORS,
    payload: error,
  }
}
