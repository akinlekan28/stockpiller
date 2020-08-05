import api from "../../api/api";
import {
  CLEAR_ERRORS,
  VIEW_TRANSACTION,
  GET_CARDS,
  TRANSACTION_LOADING,
  REMOVE_TRANSACTION_LOADING,
} from "../types";
import { setErrors } from "./authActions";

//get plans
export const getTransactions = () => (dispatch) => {
  dispatch(setLoading());
  api
    .get("/user/transactions")
    .then((res) =>
      dispatch({
        type: VIEW_TRANSACTION,
        payload: res.data,
      })
    )
    .catch((err) => {
      if (err.request) {
        dispatch(setErrors({ network: "Check your network connection" }));
      } else {
        dispatch(setErrors(err.response.data));
      }
      setTimeout(() => {
        dispatch(clearErrors());
      }, 5000);
    });
};

//Get cards
export const getCards = () => dispatch => {
    dispatch(setLoading())
    api.get('/user/cards').then(res => dispatch({type: GET_CARDS, payload: res.data.data}))
    .catch((err) => {
        if (err.request) {
          dispatch(setErrors({ network: "Check your network connection" }));
        } else {
          dispatch(setErrors(err.response.data));
        }
        setTimeout(() => {
          dispatch(clearErrors());
        }, 5000);
      });
}

//Set loding state
export const setLoading = () => {
  return {
    type: TRANSACTION_LOADING,
  };
};

//Clear Error
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};

//Remove loading
export const removeLoading = () => {
  return {
    type: REMOVE_TRANSACTION_LOADING,
  };
};
