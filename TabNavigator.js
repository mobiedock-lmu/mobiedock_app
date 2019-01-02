import MapScreen from './MapScreen.js';
import SettingsScreen from './SettingsScreen.js';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

const Tabs = createBottomTabNavigator(
  {
    MapScreen: { screen: MapScreen },
    SettingsScreen: { screen: SettingsScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'MapScreen') {
          iconName = 'ios-map';
        } else if (routeName === 'SettingsScreen') {
          iconName = 'ios-settings';
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#03a9f4',
      inactiveTintColor: 'gray',
    },
  }
);

export default createAppContainer(Tabs);
