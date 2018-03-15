import React, { Component } from 'react';
import store from '../store';
// this will be connected to store
// goToVenue on state
// goToVenue will be changed by action on EventList tool tip
// whenever that state is changed, the map will update to focus there

class Map extends Component {
	constructor(props) {
		super(props);

		this.state = {
			map: null
		}
	}
	componentDidMount() {
		this.setState({
			map: new google.maps.Map(document.getElementById('map'), {
				zoom: 4,
				center: new google.maps.LatLng(0,0)
			})
		});
	}
	componentWillUpdate(nextProps) {
		if (this.state.map !== null) {

			let service = new google.maps.places.PlacesService(this.state.map);

			console.log(nextProps);

			let req = {
				query: nextProps.goToVenue
			};

			service.textSearch(req, (data) => {
				console.log(data[0].geometry.location.lat());

				let latLng = new google.maps.LatLng(
					data[0].geometry.location.lat(),
					data[0].geometry.location.lng()
				);

				let marker = new google.maps.Marker({
					position: latLng,
					map: this.state.map
				})

				this.state.map.panTo(latLng);
				this.state.map.setZoom(15);
			});

			//let newCenter = new google.maps.LatLng(10,10);

			//this.state.map.panTo(center);
		}

	}
	render() {
		return (
			<div>
				<div id="map"></div>
				<button onClick={ () => console.log(this.props) }></button>
			</div>

		)
	}
};
//AIzaSyD-qX1iAUpdR0yOq3vHgfcrgp3r-h97-XQ

export default Map;
