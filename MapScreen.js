// TODO: make an animated splashscreen that shows when the map is loading

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import renderVehicles from './VehicleLocations.js'

class MapScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: null,
        longitude: null,
      },
      markers: [],
      markerUpdate: false,
      error: null,
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
          error: null,
        });
      }, error => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 1000 }
    );

    renderVehicles().then(vehicleLocations => this.setState({
      markers: vehicleLocations,
      markerUpdate: true,
    })).catch(err => console.log(err));
  }

  render() {
    const {navigate} = this.props.navigation;
    if (this.state.region.latitude && this.state.region.longitude && this.state.markerUpdate) {
      return (
        <MapView
          style = {styles.map}
          initialRegion = {{
            latitude: this.state.region.latitude,
            longitude: this.state.region.longitude,
            latitudeDelta: 0.05,
            longitudeDelta: 0.025,
          }}
        >
          {this.state.markers.map(marker => (
            <Marker
              coordinate={{latitude: marker.position.latitude, longitude: marker.position.longitude}}
              title={"Title"}
              description={marker.type}
            />
          ))}
        </MapView>
      );
    } else {
      return null
    }
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapScreen;
