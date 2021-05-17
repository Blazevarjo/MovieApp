import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import AuthNavigator from './AuthNavigator';
import { AuthContext } from '../contexts';

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Stack.Navigator initialRouteName='Auth' screenOptions={{ headerShown: false }}>
      {isAuthenticated ? (
        <Stack.Screen name='Root' component={BottomTabNavigator} />
      ) : (
        <Stack.Screen name='Auth' component={AuthNavigator} />
      )}
    </Stack.Navigator>
  );
}
