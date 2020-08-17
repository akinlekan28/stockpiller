import api from '../../api/api'
import {
  GET_ERRORS,
  ADD_PLAN,
  CLEAR_ERRORS,
  PLAN_LOADING,
  GET_PLAN,
  VIEW_PLANS,
  REMOVE_LOADING,
  DASHBOARD_PLANS,
  REMOVE_PLAN_LOADING,
} from '../types'

import { setErrors } from './authActions'

//Add plan
export const addPlan = (planData) => (dispatch) => {
  dispatch(clearErrors())
  return (
    api
      .post('/plan', planData)
      .then((res) =>
        dispatch({
          type: ADD_PLAN,
          payload: res.data,
        }),
      )
      // .catch(
      //   (err) => console.log(err),
      //     dispatch({
      //       type: GET_ERRORS,
      //       payload: err.response.data,
      //     }),
      //   dispatch(() => {
      //     setTimeout(function () {
      //       dispatch(clearErrors())
      //     }, 5000)
      //   }),
      // )
      .catch((err) => {
        if (err.request && !err.response) {
          dispatch(setErrors({ network: 'Check your network connection' }))
        } else {
          dispatch(setErrors(err.response.data))
        }
        dispatch({ type: REMOVE_PLAN_LOADING })
        setTimeout(() => {
          dispatch(clearErrors())
        }, 5000)
      })
  )
}

//get plans
export const getPlans = () => (dispatch) => {
  dispatch(setLoading())
  api
    .get('/plan')
    .then((res) =>
      dispatch({
        type: VIEW_PLANS,
        payload: res.data.data,
      }),
    )
    .catch((err) => {
      if (err.request && !err.response) {
        dispatch(setErrors({ network: 'Check your network connection' }))
      } else {
        dispatch(setErrors(err.response.data))
      }
      dispatch({ type: REMOVE_PLAN_LOADING })
      setTimeout(() => {
        dispatch(clearErrors())
      }, 5000)
    })
}

export const getLastPlans = () => (dispatch) => {
  dispatch(setLoading())
  api
    .get('/plan/latest')
    .then((res) => dispatch({ type: DASHBOARD_PLANS, payload: res.data.data }))
    .catch((err) => {
      if (err.request && !err.response) {
        dispatch(setErrors({ network: 'Check your network connection' }))
      } else {
        dispatch(setErrors(err.response.data))
      }
      dispatch({ type: REMOVE_PLAN_LOADING })
      setTimeout(() => {
        dispatch(clearErrors())
      }, 5000)
    })
}

export const withdrawPlan = (fdata) => (dispatch) => {
  dispatch(setLoading())
  api
    .post('/user/withdraw', fdata)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      if (err.request && !err.response) {
        dispatch(setErrors({ network: 'Check your network connection' }))
      } else {
        dispatch(setErrors(err.response.data))
      }
      dispatch({ type: REMOVE_PLAN_LOADING })
      setTimeout(() => {
        dispatch(clearErrors())
      }, 5000)
    })
}

//get plan
export const getPlan = (planId) => (dispatch) => {
  dispatch(setLoading())
  api
    .get(`/plan/${planId}`)
    .then((res) =>
      dispatch({
        type: GET_PLAN,
        payload: res.data.data,
      }),
    )
    .catch((err) => {
      if (err.request && !err.response) {
        dispatch(setErrors({ network: 'Check your network connection' }))
      } else {
        dispatch(setErrors(err.response.data))
      }
      dispatch({ type: REMOVE_PLAN_LOADING })
      setTimeout(() => {
        dispatch(clearErrors())
      }, 5000)
    })
}

//Set loding state
export const setLoading = () => {
  return {
    type: PLAN_LOADING,
  }
}

//Clear Error
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  }
}

//Remove loading
export const removeLoading = () => {
  return {
    type: REMOVE_PLAN_LOADING,
  }
}
