import {combineReducers} from 'redux';
import currency from './currencyReducer';
import rates from './ratesReducer';

const reducers = combineReducers({
  currency,
  rates,
});

export default reducers;
