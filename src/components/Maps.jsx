import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const karurLocation = {
  lat: 10.9601,
  lng: 78.0766
};

function MyComponent() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBA7EffcoebSuc2AiQibj-4NQ-JqHwqZIo">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={karurLocation}
        zoom={12}
      >
        <Marker position={karurLocation} />
      </GoogleMap>
    </LoadScript>
  )
}

export default MyComponent;
