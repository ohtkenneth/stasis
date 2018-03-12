import React, { Component } from 'react';

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
