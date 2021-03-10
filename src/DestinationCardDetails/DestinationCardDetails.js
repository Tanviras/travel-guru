import {Button, Col, Container, Row} from 'react-bootstrap';
import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../fakeData/fakeData';
import './DestinationCardDetails.css';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link } from 'react-router-dom';
import Booking from '../Booking/Booking';

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
            <Row>
            <Col>
            <h1>Welcome to {name}</h1>
            <p><small>{description}</small></p>
            </Col>

            <Col>
            <Booking placeId={placeId}></Booking>
            </Col>
            </Row>
            </Container>
        </div>
    );
};

export default DestinationCardDetails;