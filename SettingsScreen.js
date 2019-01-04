import React, { Component } from 'react';
import { View, Text } from 'react-native';
import VehicleLocations from './VehicleLocations.js'

class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    let rawJson = VehicleLocations();
    const {navigate} = this.props.navigation;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>This will be the settings screen.</Text>
      </View>
    );
  }
}

export default SettingsScreen;
