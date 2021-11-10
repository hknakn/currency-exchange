import {API_KEY, URL} from '../../constants/api';
import {
  GET_CURRENCY_RATES_PROGRESS,
  GET_CURRENCY_RATES_SUCCESS,
  GET_CURRENCY_RATES_FAIL,
} from './actionTypes';

const getCurrencyRates = () => async (dispatch, getState) => {
  console.log('burda2');
  dispatch(getCurrencyRatesProgress());

  try {
    console.log(URL + '/latest' + API_KEY);
    const response = await fetch(URL + '/latest' + API_KEY + '&format=1');
    console.log({response});
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
