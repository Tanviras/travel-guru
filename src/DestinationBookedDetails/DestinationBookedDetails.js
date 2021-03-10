import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Hotels from '../Hotels/Hotels';
import Map from '../Map/Map';
import './DestinationBookedDetails.css';

const DestinationBookedDetails = () => {
    let { placeId } = useParams();
    
    return (
        <div>
            <div className="hotelRooms">
            <p>252 stays April 13-17 3 guests</p>
            <h3>Stay in Cox's Bazar</h3>
            </div>
            
            <Row>
            <Col md={7}>
            <Hotels></Hotels>
            </Col>

            <Col md={5}>
                <Map placeId={placeId}></Map>
            </Col>

            </Row>
        </div>
    );
};

export default DestinationBookedDetails;