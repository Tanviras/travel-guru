import React from 'react';
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
  } from "@react-google-maps/api";

import fakeData from '../fakeData/fakeData';

const libraries = ["places"];
const containerStyle = {
    width: '400px',
    height: '400px'
  };

  const center = {
    lat: 21.43392,
    lng: 91.98703,
  };

  


const Map = (props) => {
    const placeId=props.placeId;
    const spot= fakeData.find((spot)=>spot.placeId===parseInt(placeId));
    // console.log(spot);
    const lat=spot.lat;
    const lng=spot.lng;
   

      const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyAOoRBY-v2wfUUKJzOF_OifE53mHYvrHMM",
        libraries,
      });
    
      if (loadError) return "Error Loading Maps";
      if (!isLoaded) return "Loading Maps";

    return(
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
      </GoogleMap>
  );
}

export default Map;
     