import React, { Component } from 'react';

let allEvents = require(__dirname + '/../events/events.json');

let initialState = {
	events: allEvents
};

function stasisApp(state = initialState, action) {
	switch (action.type) {
		case 'GET_ALL_EVENTS':
			return Object.assign({}, state, {
				events: allEvents
			});
			break;

		case 'GET_EVENT':
		console.log('is this working')
		let temp = [];
		temp.push(allEvents.find((event) => { return event.index = action.index }));
			return Object.assign({}, state, {
				events: temp
			});
			break;
		default:
		return state;
	}
}



export default stasisApp;
