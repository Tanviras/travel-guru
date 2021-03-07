import React, { useState } from 'react';
import DestCard from '../DestCard/DestCard';
import fakeData from '../fakeData/fakeData';
import './Destination.css';

const Destination = () => {
    const [destinations,setDestinations]=useState(fakeData);
    // console.log(destinations);
    return (
        <div className="cardsPosition">
            {
            destinations.map(dest=><DestCard dest={dest}></DestCard>)
            }
        </div>
    );
};

export default Destination;