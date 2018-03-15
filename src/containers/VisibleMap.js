// container for Map

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Map from '../components/Map';

const mapStateToProps = function(state) {
	return {
		goToVenue: state.venue.goToVenue
	};
};

const VisibleMap = connect(mapStateToProps)(Map);

export default VisibleMap;
