import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: YOUR_LATITUDE,
  lng: YOUR_LONGITUDE,
};

const GoogleMaps = () => {
  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
        {/* Add any markers, overlays, or additional components here */}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMaps;