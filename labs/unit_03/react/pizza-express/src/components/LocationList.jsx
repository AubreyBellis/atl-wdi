import React, { Component } from 'react';
import locationData from '/..locationData.js';
import Location from './components/Location'
class LocationList extends Component {
   
    render () {
        specs = [locationData];
      return (
            <div>
                {specs.map((spec, i) => {
                    return <Location key={i} name={spec.name} address={spec.address} phone={spec.phone} />
                    })}
             </div>

        );
    }

}

export default LocationList;


//   {
//     name: "Atlanta — Westside",
//     address: "1093 Hemphill Ave.",
//     phone: "404-724-2333"
//   },