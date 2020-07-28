import api from "../../api/api";
import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";
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
} from "../types";

//Register user
export const registerUser = (userData) => (dispatch) => {
  dispatch(clearErrors());
  return api
    .post("/register", userData)
    .then((res) =>
      dispatch({
        type: ADD_USER,
        payload: res.data,
      })
    )
    .catch(
      (err) =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data,
        }),
      dispatch(() => {
        setTimeout(function () {
          dispatch(clearErrors());
        }, 5000);
      })
    );
};

export const me = () => (dispatch) => {
  dispatch(setLoading());
  api
    .get("/user")
    .then((res) => dispatch({ type: USER_DATA, payload: res.data.data }))
    .catch((err) => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

//Login user
export const loginUser = (userData) => (dispatch) => {
  dispatch(clearErrors());
  return api
    .post("/login", userData)
    .then((res) => {
      //Save to local storage
      const { token } = res.data.data;

      //Set token to local storage
      localStorage.setItem("jwtToken", token);

      //Set auth token to header
      setAuthToken(token);

      //Decode token to get user data
      const decoded = jwt_decode(token);

      //Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(
      (err) =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data,
        }),
      dispatch(() => {
        setTimeout(function () {
          dispatch(clearErrors());
        }, 5000);
      })
    );
};

//update user
export const updateUser = (userData) => (dispatch) => {
  return api
    .post("/user", userData)
    .then((res) => dispatch({ type: UPDATE_USER, payload: res.data }))
    .catch((err) => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

//log user out
export const logoutUser = () => (dispatch) => {
  //remove token form localstorage
  localStorage.removeItem("jwtToken");
  //remove auth header for future requests
  setAuthToken(false);
  //set current user to {} which also sets isAuthenticated to false
  dispatch(setCurrentUser({}));
};

//set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

//Set loding state
export const setLoading = () => {
  return {
    type: USER_LOADING,
  };
};

//Clear Error
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
