import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import weatherInformation from './reducers/Weather';

export const store = createStore(combineReducers({
    weatherInformation
}), applyMiddleware(thunk, createLogger({})));