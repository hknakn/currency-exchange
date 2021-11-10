import * as actionTypes from '../actions/actionTypes';

const initialState = {
  selectedCurrency: 'USD',
  amount: 0,
  currencies: {
    USD: 0,
    EUR: 0,
    GBP: 0,
  },
};

const currency = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SELECTED_CURRENCY:
      return {
        ...state,
        amount: state.currencies[action.payload],
        selectedCurrency: action.payload,
      };
    case actionTypes.SET_CURRENCY_AMOUNT:
      return {
        ...state,
        amount: action.payload,
      };
    case actionTypes.SET_ALL_CURRENCIES_AND_AMOUNT:
      return {
        ...state,
        amount: action.payload[state.selectedCurrency],
        currencies: action.payload,
      };
    default:
      return state;
  }
};

export default currency;
