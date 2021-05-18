import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useTheme } from 'react-native-paper';

import AllMoviesScreen from '../screens/AllMoviesScreen';
import FavouriteMoviesScreen from '../screens/FavouriteMoviesScreen';
import { BottomTabParamList } from '../types';

const BottomTab = createMaterialBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colors = useTheme().colors;
  return (
    <BottomTab.Navigator
      initialRouteName='AllMoviesScreen'
      barStyle={{ backgroundColor: colors.primary }}
      activeColor='#FFFFFF'
      inactiveColor='#006b57'
    >
      <BottomTab.Screen
        name='AllMoviesScreen'
        component={AllMoviesScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: 'home',
        }}
      />
      <BottomTab.Screen
        name='FavouriteMoviesScreen'
        component={FavouriteMoviesScreen}
        options={{
          tabBarLabel: 'Favourites',
          tabBarIcon: 'heart',
        }}
      />
    </BottomTab.Navigator>
  );
}
