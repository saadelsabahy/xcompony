import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import SplashScreen from '../screens/Splash';

export default createAppContainer(
   createSwitchNavigator({
      Splash: SplashScreen,
      Main: MainTabNavigator,
   })
);
