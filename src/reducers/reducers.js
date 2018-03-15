import React, { Component } from 'react';
import { combineReducers } from 'redux';

let allEvents = require('../events/events.json');

let initialState = {
	events: allEvents
};

function events(state = initialState, action) {
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

function venue(state = { goToVenue: null }, action) {
	switch (action.type) {
		case 'GO_TO_VENUE':
			return Object.assign({}, state, {
				goToVenue: action.venue
			});
		default:
			return state;
	}
}

const rootReducer = combineReducers({
	venue,
	events

});

export default rootReducer;
