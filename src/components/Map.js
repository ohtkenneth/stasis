import React, { Component } from 'react';

export default class Map extends Component {
	constructor(props) {
		super(props);

		// somehow reference map?
		console.log(google.maps)
	}
	componentDidMount() {
		function initMap() {
		  var uluru = {lat: -25.363, lng: 131.044};
		  var map = new google.maps.Map(document.getElementById('map'), {
		    zoom: 4,
		    center: uluru
		  });
		}
		initMap();
	}
	render() {
		return (
			<div id="map"></div>
		)
	}
}
//AIzaSyD-qX1iAUpdR0yOq3vHgfcrgp3r-h97-XQ
