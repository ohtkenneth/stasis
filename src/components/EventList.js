import React, { Component } from 'react';

import Event from './Event';
import ToolTip from './ToolTip';

class EventList extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h4>Hello world</h4>
				<ul>
					{
						this.props.events.map((event, idx) => {
							return (
								//<li key={idx} id={event.index} onClick={(e) => { this.props.onEventClick({ index: e.target.id  }); }}>{event.name}</li>
								<li key={idx} onClick={() => { this.props.onEventClick(event.index);}}>
								{event.name}
								</li>
							)
						})
					}
				</ul>
				{
					this.props.clickedEvent !== undefined ? <ToolTip event={this.props.clickedEvent}/> : <h4></h4>
				}
				<button onClick={()=> { console.log(this.props); }}>click</button>
			</div>
		);
	}
}
// need an array of events

export default EventList;
