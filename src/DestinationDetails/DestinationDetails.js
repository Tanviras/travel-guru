import {Button} from 'react-bootstrap';
import React from 'react';
import fakeData from '../fakeData/fakeData';
import './DestinationDetails.css';
import { Icon } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const DestinationDetails = () => {
    const destiDetails=fakeData;
    console.log(destiDetails);
    return (
        <div>
            {/* <h3>This is Destination Details</h3> */}
            <h1>COX'S BAZAR</h1>
            <small>
            "Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island"
            </small>
            <br/>
            <br/>
            <Button variant="warning" className="bookingButton ">
                Booking
                <ArrowForwardIcon/>
                </Button>
        </div>
    );
};

export default DestinationDetails;