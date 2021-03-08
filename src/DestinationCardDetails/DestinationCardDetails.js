import {Button, Container} from 'react-bootstrap';
import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../fakeData/fakeData';
import './DestinationCardDetails.css';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link } from 'react-router-dom';

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
            <Container className='containerStyles'>
            <h1>Welcome to {name}</h1>
            <h6>{description}</h6>
            <Link to="/login">
            <Button variant="warning" className="bookingButton ">
            Booking
            <ArrowForwardIcon/>
            </Button>
            </Link>
            </Container>
        </div>
    );
};

export default DestinationCardDetails;