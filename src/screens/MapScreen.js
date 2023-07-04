import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import MapView, { Marker } from 'react-native-maps';
 import SearchForm from '../components/SearchForm';
const MapScreen = ({ query }) => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [searchedLocation, setSearchedLocation] = useState(null);

  useEffect(() => {
    // Get the user's current location
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ latitude, longitude });
      },
      (error) => {
        console.log('Error getting current location:', error);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }, []);

  useEffect(() => {
    if (query) {
      // Call the Geocoding API to get coordinates based on the search query
      const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        query
      )}&key=YOUR_API_KEY`; // Replace YOUR_API_KEY with  actual API key

      fetch(geocodeUrl)
        .then((response) => response.json())
        .then((data) => {
          if (data.results.length > 0) {
            const { lat, lng } = data.results[0].geometry.location;
            setSearchedLocation({ latitude: lat, longitude: lng });
          } else {
            setSearchedLocation(null);
          }
        })
        .catch((error) => {
          console.log('Error fetching geocode:', error);
          setSearchedLocation(null);
        });
    } else {
      setSearchedLocation(null);
    }
  }, [query]);

  return (
    <View style={{ flex: 1 }}>
      <SearchForm />

      {currentLocation && (
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {currentLocation && (
            <Marker
              coordinate={{
                latitude: currentLocation.latitude,
                longitude: currentLocation.longitude,
              }}
              title="Current Location"
            />
          )}

          {searchedLocation && (
            <Marker
              coordinate={{
                latitude: searchedLocation.latitude,
                longitude: searchedLocation.longitude,
              }}
              title="Searched Location"
            />
          )}
        </MapView>
      )}
    </View>
  );
};

const mapStateToProps = (state) => ({
  query: state.search.query,
});

export default connect(mapStateToProps)(MapScreen);