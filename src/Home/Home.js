import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Destination from '../Destination/Destination';
import DestinationDetails from '../DestinationDetails/DestinationDetails';
import './Home.css';

const Home = () => {
    return (
        <div style={{ marginTop: "80px" }}>
        
        <Row>
          <Col sm={4}>
            <DestinationDetails></DestinationDetails>
          </Col>
          <Col sm={8} style={{ display: "flex" }}>
            <Destination></Destination>
          </Col>
        </Row>
      </div>
    );
};

export default Home;