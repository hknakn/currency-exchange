import {
  GET_CURRENCY_RATES_PROGRESS,
  GET_CURRENCY_RATES_SUCCESS,
  GET_CURRENCY_RATES_FAIL,
} from '../actions/actionTypes';

const initialState = {
  rates: {},
  isFetching: false,
  error: false,
};

const rates = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENCY_RATES_PROGRESS:
      return {
        ...state,
        isFetching: true,
      };
    case GET_CURRENCY_RATES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        rates: action.data.data,
      };
    case GET_CURRENCY_RATES_FAIL:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
};

export default rates;
