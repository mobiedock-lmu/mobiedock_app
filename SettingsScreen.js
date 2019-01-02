import React, { Component } from 'react';
import { View, Text } from 'react-native';

class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>This will be the settings screen</Text>
      </View>
    );
  }
}

export default SettingsScreen;
