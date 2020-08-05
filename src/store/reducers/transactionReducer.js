import {
  REMOVE_TRANSACTION_LOADING,
  TRANSACTION_LOADING,
  VIEW_TRANSACTION,
  GET_CARDS,
} from "../types";

const initialState = {
  loading: false,
  transactions: {},
  cards: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case VIEW_TRANSACTION:
      return {
        ...state,
        transactions: action.payload,
        loading: false,
      };

    case GET_CARDS:
      return {
        ...state,
        cards: action.payload,
        loading: false,
      };

    case TRANSACTION_LOADING:
      return {
        ...state,
        loading: true,
      };

    case REMOVE_TRANSACTION_LOADING:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
