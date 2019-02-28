import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { Card, Input, ThemeProvider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import AnimatedLinearGradient from 'react-native-animated-linear-gradient';

GRADIENT_BACKGROUND_COLORS = ['white', '#00bcd4'];

class LoginScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Mobiedock',
      header: null,
    };
  };

  render() {
    return (
      <View style={styles.page}>
        <AnimatedLinearGradient customColors={GRADIENT_BACKGROUND_COLORS} speed={3000}/>
        <ThemeProvider theme={theme}>
          <Text style={styles.title}>Mobiedock.</Text>
          <Card>
            <Input
              placeholder='Email'
              leftIcon={{ type: 'font-awesome', name: 'envelope-o', color: 'white' }}
              inputStyle={{ marginLeft: 10 }}
            />
            <Input
              placeholder='Password'
              leftIcon={{ type: 'font-awesome', name: 'lock', color: 'white' }}
              secureTextEntry={ true }
              inputStyle={{ marginLeft: 18 }}
            />
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Map')}>
              <Text style={styles.buttonText}>Log in</Text>
            </TouchableOpacity>
          </Card>
          <Card>
            <Input
              placeholder='Email'
              leftIcon={{ type: 'font-awesome', name: 'envelope-o', color: 'white' }}
              inputStyle={{ marginLeft: 10 }}
            />
            <Input
              placeholder='Username'
              leftIcon={{ type: 'font-awesome', name: 'user', color: 'white' }}
              inputStyle={{ marginLeft: 16 }}
            />
            <Input
              placeholder='Password'
              leftIcon={{ type: 'font-awesome', name: 'lock', color: 'white' }}
              secureTextEntry={ true }
              inputStyle={{ marginLeft: 18 }}
            />
            <Input
              placeholder='Confirm Password'
              leftIcon={{ type: 'font-awesome', name: 'lock', color: 'white' }}
              secureTextEntry={ true }
              inputStyle={{ marginLeft: 18 }}
            />
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Map')}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </Card>
        </ThemeProvider>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    marginTop: 15,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  buttonText: {
    color: '#00bcd4',
    fontSize: 18,
  },
  cardWrapper: {
    flex: 0.9,
  },
  cardContainer: {
    backgroundColor: '#00bcd4',
    borderColor: 'transparent',
    borderRadius: 20,
  },
  cardTitle: {
    color: 'white',
    marginBottom: 3,
  },
  input: {
    color: 'white',
  },
  inputContainer: {
    borderColor: 'white',
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 36,
    textAlign: 'center',
    marginBottom: 30,
    textShadowColor: '#000000',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  }
});

const theme = {
  Card: {
    flexDirection: 'row',
    wrapperStyle: styles.cardWrapper,
    containerStyle: styles.cardContainer,
    titleStyle: styles.cardTitle,
    dividerStyle: styles.cardDivider,
  },
  Input: {
    placeholderTextColor: 'white',
    selectionColor: 'white',
    inputStyle: styles.input,
    inputContainerStyle: styles.inputContainer,
    autoComplete: 'off',
    autoCapitalize: 'none',
  }
};

export default LoginScreen;
