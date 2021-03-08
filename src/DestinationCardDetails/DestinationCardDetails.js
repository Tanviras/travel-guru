import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../fakeData/fakeData';
import './DestinationCardDetails.css';

const DestinationCardDetails = () => {
    const { placeId } = useParams();


    const destination = fakeData.find(dest => dest.placeId === parseInt(placeId));
    // console.log(destination);
    const {name,description,photo}=destination;
    
    
    const backgroundstyles={
        backgroundImage:`url(${photo})`,
    }
    return (
        <div style={backgroundstyles} className='bgImageStyles'>
            <h1>Welcome to {name}</h1>
            <h6>{description}</h6>
        </div>
    );
};

export default DestinationCardDetails;