import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './index';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));
const configureStore = () => createStore(reducers, composedEnhancer);

export default configureStore;
