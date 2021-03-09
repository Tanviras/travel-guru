import { ButtonBase, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import hotelRoom1 from '../Image/hotelroom1.png';
import hotelRoom2 from '../Image/hotelroom2.png';
import hotelRoom3 from '../Image/hotelroom3.png';
// import StarRateIcon from '@material-ui/icons/StarRate';
import starRateIcon from '../Icon/star_1_.png';
import './Hotels.css';

// const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//       marginBottom: 20,
//     },
//     paper: {
//       padding: theme.spacing(2),
//       margin: "auto",
//       maxWidth: 500,
//     },
//     image: {
//       width: 128,
//       height: 128,
//     },
//     img: {
//       margin: "auto",
//       display: "block",
//       maxWidth: "100%",
//       maxHeight: "100%",
//     },
//   }));

const Hotels = () => {
    // const classes = useStyles();
    return (
        <div>
            
            {/* <Paper className={classes.paper}>

            <Grid container spacing={2}>

            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="hotel1" src={ hotelRoom1} />
              </ButtonBase>
            </Grid>

            <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>

            <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    Light bright airy stylish apt & safe peaceful stay
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    4 Guests, 2 Bedrooms, 2 Beds, 2 Baths
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    WIFI, Air Conditioning, Kitchen <br />
                    Cancellation Flexibility available
                  </Typography>
                </Grid>

                <Grid item>
                  <Typography
                    variant="body2"
                    style={{ cursor: "pointer" }}
                  ></Typography>
                </Grid>

                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                   <img src={starRateIcon} alt=''/> 4.9 (20)
                  </Typography>
                </Grid>

                </Grid>

                <Grid item>
                <Typography variant="subtitle1">$34/night</Typography>
                </Grid>

                </Grid>
          </Grid>
          </Paper> */}

        <Row>
            <Col>
            <img src={hotelRoom1} alt='' className="imageSize"/>
            <br/>
            <br/>
            <br/>
            <br/>
            <img src={hotelRoom2} alt='' className="imageSize"/>
            <br/>
            <br/>
            <br/>
            <br/>
            <img src={hotelRoom3} alt='' className="imageSize"/>
            </Col>

            <Col>
            <div className="descriptionSizes">
            <h5> Light bright airy stylish apt & safe peaceful stay</h5>
            <p>4 Guests  2 Bedrooms  2 Beds  2 Baths</p>
            <p>WIFI - Air Conditioning - Kitchen </p>
            <p>Cancellation Flexibility available</p>
            <img src={starRateIcon} alt='' className='iconSizes'/>4.9(20)  $34/night  $167total
            </div>
            <br/>
            <br/>
            <br/>
            <div className="descriptionSizes">
            <h5> Light bright airy stylish apt & safe peaceful stay</h5>
            <p>4 Guests  2 Bedrooms  2 Beds  2 Baths</p>
            <p>WIFI - Air Conditioning - Kitchen </p>
            <p>Cancellation Flexibility available</p>
            <img src={starRateIcon} alt='' className='iconSizes'/>4.9(20)  $34/night  $167total
            </div>
            <br/>
            <br/>
            <br/>
            <div className="descriptionSizes">
            <h5> Light bright airy stylish apt & safe peaceful stay</h5>
            <p>4 Guests  2 Bedrooms  2 Beds  2 Baths</p>
            <p>WIFI - Air Conditioning - Kitchen </p>
            <p>Cancellation Flexibility available</p>
            <img src={starRateIcon} alt='' className='iconSizes'/>4.9(20)  $34/night  $167total
            </div>
            </Col>
        </Row>
           
        </div>
    );
};

export default Hotels;