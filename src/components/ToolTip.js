import React, { Component } from 'react';

// displays information about the event
function ToolTip({event}) {
    return (
        <div>
            <h4>{event.name}</h4>
            <h4>{event.city}</h4>
            <h4>{event.venue}</h4>
            <button onClick={() => console.log('this should go to map marker') }>Go to Venue</button>
        </div>
    );
}

export default ToolTip;
