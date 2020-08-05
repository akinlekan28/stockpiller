import {
  SET_CURRENT_USER,
  ADD_USER,
  GET_SUCCESS,
  VIEW_USERS,
  USER_DATA,
  UPDATE_USER,
  UPDATE_PASSWORD,
  USER_LOADING,
  REMOVE_USER_LOADING
} from '../types'
import isEmpty from '../../utils/is-empty'

const initialState = {
  isAuthenticated: false,
  loading: false,
  user: {},
  users: [],
  userData: {},
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      }

    case ADD_USER:
      return {
        ...state,
        user: action.payload,
      }

    case UPDATE_PASSWORD:
      return {
        ...state,
        user: action.payload,
        loading: false,
      }

    case USER_DATA:
      return {
        ...state,
        userData: action.payload,
        loading: false,
      }

    case UPDATE_USER:
      return {
        ...state,
        userData: action.payload,
      }

    case VIEW_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      }

    case GET_SUCCESS:
      return action.payload

    case USER_LOADING:
      return {
        ...state,
        loading: true,
      }

    case REMOVE_USER_LOADING:
      return {
        ...state,
        loading: false,
      }

    default:
      return state
  }
}
