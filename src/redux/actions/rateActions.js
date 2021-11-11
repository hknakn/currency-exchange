import {URL} from '../../constants/api';
import {
  GET_CURRENCY_RATES_PROGRESS,
  GET_CURRENCY_RATES_SUCCESS,
  GET_CURRENCY_RATES_FAIL,
} from './actionTypes';

const getCurrencyRates = baseCurrency => async dispatch => {
  dispatch(getCurrencyRatesProgress());

  try {
    const response = await fetch(URL + 'base_currency=' + baseCurrency);
    const data = await response.json();
    dispatch(getCurrencyRatesSuccess(data));
  } catch (error) {
    console.log({error});
    dispatch(getCurrencyRatesFail());
  }
};

const getCurrencyRatesProgress = () => {
  return {
    type: GET_CURRENCY_RATES_PROGRESS,
  };
};

const getCurrencyRatesSuccess = data => {
  return {
    type: GET_CURRENCY_RATES_SUCCESS,
    data,
  };
};

const getCurrencyRatesFail = () => {
  return {
    type: GET_CURRENCY_RATES_FAIL,
  };
};

export {
  getCurrencyRates,
  getCurrencyRatesProgress,
  getCurrencyRatesSuccess,
  getCurrencyRatesFail,
};
