import React, { Component } from 'react';

// google maps api should be accessible

export function getAllEvents() {
	return {
		type: 'GET_ALL_EVENTS'
	};
}

// action to set event marker on map when clicked
// payload should contain event index
export function eventClicked(eventIndex) {
	return {
		type: 'EVENT_CLICKED',
		index: eventIndex
	};
}

export function goToVenue(payload) {
	return {
		type: 'GO_TO_VENUE',
		venue: payload
	};
}
