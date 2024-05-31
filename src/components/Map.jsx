import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';

const Map = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
    script.async = true;
    document.head.appendChild(script);

    window.initMap = () => {
      const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 59.3293, lng: 18.0686 },
        zoom: 12,
      });

      const bikePumpStations = [
        { lat: 59.33258, lng: 18.0649 },
        { lat: 59.3293, lng: 18.0686 },
        { lat: 59.334591, lng: 18.06324 },
      ];

      bikePumpStations.forEach((location) => {
        new google.maps.Marker({
          position: location,
          map: map,
        });
      });
    };

    return () => {
      document.head.removeChild(script);
      delete window.initMap;
    };
  }, []);

  return <Box id="map" width="100%" height="100vh" />;
};

export default Map;