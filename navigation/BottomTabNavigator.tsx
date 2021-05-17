import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AllMoviesScreen from '../screens/AllMoviesScreen';
import FavouriteMoviesScreen from '../screens/FavouriteMoviesScreen';
import { BottomTabParamList } from '../types';

const BottomTab = createMaterialBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName='AllMoviesScreen'>
      <BottomTab.Screen
        name='AllMoviesScreen'
        component={AllMoviesScreen}
        options={{
          tabBarIcon: () => <MaterialCommunityIcons name='home' />,
        }}
      />
      <BottomTab.Screen
        name='FavouriteMoviesScreen'
        component={FavouriteMoviesScreen}
        options={{
          tabBarIcon: () => <MaterialCommunityIcons name='heart' />,
        }}
      />
    </BottomTab.Navigator>
  );
}
