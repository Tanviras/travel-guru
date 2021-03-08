import {Button} from 'react-bootstrap';
import React from 'react';
import './DestinationDetails.css';
// import { Icon } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const DestinationDetails = () => {
    return (
        <div>
            <h1>COX'S BAZAR</h1>
            <small>
            Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island
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