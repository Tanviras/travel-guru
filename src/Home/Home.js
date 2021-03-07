import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Destination from '../Destination/Destination';
import DestinationDetails from '../DestinationDetails/DestinationDetails';

const Home = () => {
    return (
        <div>
            <Row>
            <Col sm={4}>
            <DestinationDetails></DestinationDetails>
            </Col>
            <Col sm={8}>
            <Destination></Destination>
            </Col>
            </Row>
           
        </div>
    );
};

export default Home;