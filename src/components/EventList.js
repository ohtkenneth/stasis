import React, { Component } from 'react';

import Event from './Event';

class EventList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentEventIndex: ''
		};
	}
	render() {
		return (
			<div>
				<h4>Hello world</h4>
				<ul>
					{
						this.props.events.map((event, idx) => {
							return (
								<li key={idx} id={event.index} onClick={(e) => { this.props.onEventClick({ index: e.target.id  }); }}>{event.name}</li>
							)
						})
					}
				</ul>
				<button onClick={()=> { console.log(this.props) }}>click</button>
			</div>
		);
	}
}
// need an array of events

export default EventList;
