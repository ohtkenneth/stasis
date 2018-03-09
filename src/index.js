import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';
import stasisApp from './reducers/reducers';

let store = createStore(stasisApp);

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('container')
);
