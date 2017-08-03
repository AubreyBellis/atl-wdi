import React, { Component } from 'react';
import LocationList from '../locationData.js';


class Location extends Component {
    render () {
        return (
            <div>
        <h2>{this.props.name}</h2>
        <h3>{this.props.address}</h3>
        <h4>{this.props.phone}</h4>
            </div>
            
        );
    }

}

export default Location;


// export default Location;