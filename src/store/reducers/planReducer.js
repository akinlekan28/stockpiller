import {
  ADD_PLAN,
  VIEW_PLANS,
  GET_PLAN,
  PLAN_LOADING,
  GET_ERRORS,
  REMOVE_LOADING,
  DASHBOARD_PLANS,
  REMOVE_PLAN_LOADING,
} from '../types'

const initialState = {
  loading: false,
  plan: {},
  plans: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_PLAN:
      return {
        ...state,
        plan: action.payload,
        loading: false,
      }

    case VIEW_PLANS:
      return {
        ...state,
        plans: action.payload,
        loading: false,
      }

    case DASHBOARD_PLANS:
      return {
        ...state,
        plans: action.payload,
        loading: false,
      }

    case GET_PLAN:
      return {
        ...state,
        plan: action.payload,
        loading: false,
      }

    case PLAN_LOADING:
      return {
        ...state,
        loading: true,
      }

    case REMOVE_PLAN_LOADING:
      return {
        ...state,
        loading: false,
      }

    default:
      return state
  }
}
