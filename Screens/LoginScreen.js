import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Card, Input, ThemeProvider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import AnimatedLinearGradient, {presetColors} from 'react-native-animated-linear-gradient';

class LoginScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Mobiedock',
    };
  };

  render() {
    return (
      <View style={styles.page}>
        <AnimatedLinearGradient customColors={['#0EEC65', '#E6B61F', '#00bcd4', '#001F5E', '#8F1FE6']} speed={1000}/>
        <ThemeProvider theme={theme}>
          <Card title='Log In'>
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
          </Card>
          <Card title='Sign Up'>
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
            <Input
              placeholder='Confirm Password'
              leftIcon={{ type: 'font-awesome', name: 'lock', color: 'white' }}
              secureTextEntry={ true }
              inputStyle={{ marginLeft: 18 }}
            />
          </Card>
        </ThemeProvider>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cardWrapper: {
    flex: 0.9,
  },
  cardContainer: {
    backgroundColor: '#00bcd4',
  },
  cardTitle: {
    color: 'white',
    marginBottom: 3,
  },
  cardDivider: {
    borderWidth: 1,
    borderColor: 'white',
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    color: 'white',
  },
  inputContainer: {
    borderColor: 'white',
  },
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
