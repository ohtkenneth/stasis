import React, { Component } from 'react';
import VisibleEventList from '../containers/VisibleEventList';
import VisibleMap from '../containers/VisibleMap';
// import Map from './Map';

function App() {
	return (
		<div>
			<h4>Hello world</h4>
			<VisibleEventList />
			<VisibleMap />
		</div>
	);
}

export default App;
