import React, { Component } from 'react';

let allEvents = require('../events/events.json');


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

		case 'EVENT_CLICKED':

			return Object.assign({}, state, {
				clickedEvent: allEvents.find((event) => { return event.index === action.index; })
			});
			break;
		default:
		return state;
	}
}

export default stasisApp;
