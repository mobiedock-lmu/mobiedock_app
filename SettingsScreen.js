import React, {Component} from 'react';

class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <Button
        title="Navigate"
        onPress={() => navigate('MapScreen')}
      />
    );
  }
}

export default SettingsScreen;
