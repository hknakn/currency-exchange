import currencies from '../../constants/currencies';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
  selectedCurrency: 'USD',
  exchangeCurrency: 'EUR',
  selectedCurrencyAmount: 0,
  exchangeCurrencyAmount: 0,
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
        selectedCurrency: action.payload,
        selectedCurrencyAmount: state.currencies[action.payload],
      };
    case actionTypes.SET_EXCHANGE_CURRENCY:
      return {
        ...state,
        exchangeCurrency: action.payload,
        exchangeCurrencyAmount: state.currencies[action.payload],
      };
    case actionTypes.SET_CURRENCY_AMOUNT:
      return {
        ...state,
        selectedCurrencyAmount: action.payload,
        currencies: {
          ...state.currencies,
          [currencies[state.selectedCurrency]]: action.payload,
        },
      };
    case actionTypes.SET_EXCHANGE_AMOUNT:
      return {
        ...state,
        exchangeCurrencyAmount: action.payload,
        currencies: {
          ...state.currencies,
          [currencies[state.exchangeCurrency]]: action.payload,
        },
      };
    case actionTypes.SET_ALL_CURRENCIES_AND_AMOUNT:
      return {
        ...state,
        selectedCurrencyAmount: action.payload[state.selectedCurrency],
        exchangeCurrencyAmount: action.payload[state.exchangeCurrency],
        currencies: action.payload,
      };
    default:
      return state;
  }
};

export default currency;
