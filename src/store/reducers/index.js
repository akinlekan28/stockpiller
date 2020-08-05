import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
import planReducer from "./planReducer";
import transactionReducer from "./transactionReducer";

export default combineReducers({
  errors: errorReducer,
  auth: authReducer,
  plan: planReducer,
  transactions: transactionReducer,
});
