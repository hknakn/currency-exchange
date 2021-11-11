import * as actionTypes from './actionTypes';

const setSelectedCurrency = selectedCurrency => ({
  type: actionTypes.SET_SELECTED_CURRENCY,
  payload: selectedCurrency,
});

const setExchangeCurrency = exchangeCurrency => ({
  type: actionTypes.SET_EXCHANGE_CURRENCY,
  payload: exchangeCurrency,
});

const setCurrencyAmount = amount => ({
  type: actionTypes.SET_CURRENCY_AMOUNT,
  payload: amount,
});

const setExchangeAmount = amount => ({
  type: actionTypes.SET_EXCHANGE_AMOUNT,
  payload: amount,
});

const setAllCurrenciesAndAmount = currencies => ({
  type: actionTypes.SET_ALL_CURRENCIES_AND_AMOUNT,
  payload: currencies,
});

export {
  setSelectedCurrency,
  setCurrencyAmount,
  setAllCurrenciesAndAmount,
  setExchangeCurrency,
  setExchangeAmount,
};
