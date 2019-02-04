import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

class SignupScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Create an account',
      headerLeft: null,
    };
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Go to Map"
          onPress={() => this.props.navigation.navigate('Map')}
        />
      </View>
    )
  }
}

export default SignupScreen;
