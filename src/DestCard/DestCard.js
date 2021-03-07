import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './DestCard.css';


const DestCard = (props) => {
        
        const {placeId,name,description,photo}=props.dest;


        

    return (
              <div>
                <Link to={'/destination/'+placeId}>
                  {
                      <Card className="bg-dark text-white">
                      <Card.Img
                        className="cardImage"
                        src={photo}
                        alt="Card image"
                      />
                      <Card.ImgOverlay>
                        <h3>{name}</h3>
                      </Card.ImgOverlay>
                    </Card>
                  }
                  </Link>
                  
              </div>    
                  
                  
    );
};

export default DestCard;