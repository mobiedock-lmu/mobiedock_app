import MapScreen from './MapScreen.js';
import SettingsScreen from './SettingsScreen.js';
import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

const Tabs = createBottomTabNavigator({
  MapScreen: { screen: MapScreen },
  SettingsScreen: { screen: SettingsScreen },
});

export default createAppContainer(Tabs);
