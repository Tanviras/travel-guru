import React from 'react';
import {Button, Nav} from 'react-bootstrap';
import './DestinationDetails.css';
// import { Icon } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link } from '@material-ui/core';

const DestinationDetails = () => {
    return (
        <div>
            <h1>COX'S BAZAR</h1>
            <p>
            <small>
            Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island
            </small>
            </p>
            
            <br/>
            <br/>
            <Button variant="warning" className="bookingButton ">
                <Link to ='/destination/+1'>
                Booking
                <ArrowForwardIcon/>
                </Link>
            </Button>



        </div>
    );
};

export default DestinationDetails;