// container for EventList

import React, { Component } from 'react';
import { connect } from 'react-redux';

import EventList from '../components/EventList';
import { getAllEvents, eventClicked } from '../actions/actions';

const mapStateToProps = function(state) {
	return {
		events: state.events,
		clickedEvent: state.clickedEvent
	};
};

const mapDispatchToProps = function(dispatch) {
	return {
		getAllEvents: function() {
			dispatch(getAllEvents());
		},
		// payload should have event index
		onEventClick: function(payload) {
			dispatch(eventClicked(payload));
		}
	};
};

const VisibleEventList = connect(mapStateToProps, mapDispatchToProps)(EventList);

export default VisibleEventList;
