import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AllMoviesScreen from '../screens/AllMoviesScreen';
import FavouriteMoviesScreen from '../screens/FavouriteMoviesScreen';
import { BottomTabParamList, TabAllParamList, TabFavouritesParamList } from '../types';

const BottomTab = createMaterialBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName='TabAll'>
      <BottomTab.Screen
        name='TabAll'
        component={TabAllNavigator}
        options={{
          tabBarIcon: () => <MaterialCommunityIcons name='home' />,
        }}
      />
      <BottomTab.Screen
        name='TabFavourites'
        component={TabFavouritesNavigator}
        options={{
          tabBarIcon: () => <MaterialCommunityIcons name='heart' />,
        }}
      />
    </BottomTab.Navigator>
  );
}

const TabOneStack = createStackNavigator<TabAllParamList>();

function TabAllNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name='AllMoviesScreen'
        component={AllMoviesScreen}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabFavouritesParamList>();

function TabFavouritesNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name='FavouriteMoviesScreen'
        component={FavouriteMoviesScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}
