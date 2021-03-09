import React from 'react';
import { Col } from 'react-bootstrap';
import { useParams } from 'react-router';
import Hotels from '../Hotels/Hotels';
import './DestinationBookedDetails.css';

const DestinationBookedDetails = () => {
    let { placeId } = useParams();
    
    return (
        <div>
            <div className="hotelRooms">
            <p>252 stays April 13-17 3 guests</p>
            <h3>Stay in Cox's Bazar</h3>
            </div>
            
            
            <Col md={7}>
            <Hotels></Hotels>
            </Col>

            <Col md={5}>
            </Col>
        </div>
    );
};

export default DestinationBookedDetails;