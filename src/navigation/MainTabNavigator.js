import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { TabBarIcon } from '../components';
import FavouritesScreen from '../screens/FavouritesScreen';
import SearchScreen from '../screens/SearchScreen';
import Colors from '../constants/Colors';

const config = Platform.select({
   web: { headerMode: 'screen' },
   default: {
      headerMode: 'none',
   },
});

const searchStack = createStackNavigator(
   {
      Search: SearchScreen,
   },
   config
);

searchStack.navigationOptions = {
   tabBarLabel: 'Search',
   tabBarIcon: ({ focused }) => (
      <TabBarIcon focused={focused} name={'ios-search'} />
   ),
};

searchStack.path = '';

const favouritesStack = createStackNavigator(
   {
      Favourites: FavouritesScreen,
   },
   config
);

favouritesStack.navigationOptions = {
   tabBarLabel: 'Favourite',
   tabBarIcon: ({ focused }) => (
      <TabBarIcon focused={focused} name={'md-heart'} />
   ),
};

favouritesStack.path = '';

const tabNavigator = createBottomTabNavigator(
   {
      searchStack,
      favouritesStack,
   },
   {
      tabBarOptions: {
         activeTintColor: Colors.tabIconSelected,
         keyboardHidesTabBar: true,
         labelPosition: 'below-icon',
         style: {
            backgroundColor: Colors.tabBar,
            borderTopColor: Colors.tabBarBorder,
         },
      },
   }
);

tabNavigator.path = '';

export default tabNavigator;
