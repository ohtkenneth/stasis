// container for EventList

import React, { Component } from 'react';
import { connect } from 'react-redux';

import EventList from '../components/EventList';
import { getAllEvents, getEvent } from '../actions/actions';

const mapStateToProps = function(state) {
	return {
		events: state.events
	};
};

const mapDispatchToProps = function(dispatch) {
	return {
		getAllEvents: function() {
			dispatch(getAllEvents());
		},
		// payload should have event index
		onEventClick: function(payload) {
			console.log('thisis payload: ' + payload.index);
			dispatch(getEvent(payload))
		}
	};
};

const VisibleEventList = connect(mapStateToProps, mapDispatchToProps)(EventList);

export default VisibleEventList;
