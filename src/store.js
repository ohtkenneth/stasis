import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import App from './components/App';
import rootReducer from './reducers/reducers';

export default createStore(rootReducer);
