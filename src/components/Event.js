import React, { Component } from 'react';

export default function Event({event, city}) {
	return (
		// onclick should take you to google map
		<li onClick={() => { alert(event)}}>
			{event}, {city}
		</li>
	)
}
