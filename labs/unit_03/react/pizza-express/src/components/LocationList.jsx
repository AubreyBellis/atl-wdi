import React, { Component } from 'react';
import Location from './Location';
import locationData from '../locationData.js';

class Locations extends Component {
    render() {
        return(
            <div id="locations">
            <h1>Locations :</h1>
            <div className="locations">
                {locationData.map((location, i) => {
                    return <Location key={i} location={location} />
                })}
            </div>
            </div>
        )
    }
}
export default Locations;


//   {
//     name: "Atlanta — Westside",
//     address: "1093 Hemphill Ave.",
//     phone: "404-724-2333"
//   },