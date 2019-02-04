import MapScreen from './Screens/MapScreen';
import LoginScreen from './Screens/LoginScreen';
import SignupScreen from './Screens/SignupScreen';
import { createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';

// TODO: determine why setting borderColor doesn't affect borderBottomColor
const defaults = {
  headerStyle: {
    backgroundColor: '#00bcd4',
    borderColor: '#00bcd4',
    borderBottomColor: '#00bcd4',
    borderLeftWidth: 15,
    borderBottomWidth: 10,
  },
  headerTintColor: '#fff',
}

const StackNavigator = createStackNavigator(
    {
      Login: { screen: LoginScreen },
      Signup: { screen: SignupScreen },
      Map: { screen: MapScreen },
    },
    {
      initialRouteName: 'Login',  // ternary to determine if user has already logged in?
      defaultNavigationOptions: defaults,
    },
);

const AppNavigator = createDrawerNavigator(
  {
    Home: { screen: StackNavigator },
  },
  {
    drawerBackgroundColor: '#00bcd4',
    contentOptions: {
      inactiveTintColor: '#fff',
      activeTintColor: '#fff',
    },
  },
);

export default createAppContainer(AppNavigator);
