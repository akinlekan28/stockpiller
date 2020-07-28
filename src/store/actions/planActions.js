import api from '../../api/api'
import {
  GET_ERRORS,
  ADD_PLAN,
  CLEAR_ERRORS,
  PLAN_LOADING,
  GET_PLAN,
  VIEW_PLANS,
  REMOVE_LOADING,
  REMOVE_PLAN_LOADING,
} from '../types'

//Add plan
export const addPlan = (planData) => (dispatch) => {
  dispatch(clearErrors())
  return api
    .post('/plan', planData)
    .then((res) =>
      dispatch({
        type: ADD_PLAN,
        payload: res.data,
      }),
    )
    .catch(
      (err) =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data,
        }),
      dispatch(() => {
        setTimeout(function () {
          dispatch(clearErrors())
        }, 5000)
      }),
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
    .catch(
      (err) =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data,
        }),
      dispatch(() => {
        setTimeout(function () {
          dispatch(clearErrors())
        }, 5000)
      }),
    )
}

//get plan
export const getPlan = planId => (dispatch) => {
  dispatch(setLoading())
  api
    .get(`/plan/${planId}`)
    .then((res) =>
      dispatch({
        type: GET_PLAN,
        payload: res.data.data,
      }),
    )
    .catch(
      (err) =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data,
        }),
      dispatch(() => {
        setTimeout(function () {
          dispatch(clearErrors())
        }, 5000)
      }),
    )
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
