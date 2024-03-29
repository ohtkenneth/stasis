import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';
import rootReducer from './reducers/reducers';
import store from './store';

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('container')
);
