import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RegisterScreen, ResetPasswordScreen, SignInScreen } from '../screens';
import { AuthStackParamList } from '../types';

const AuthStack = createStackNavigator<AuthStackParamList>();

export default function AuthNavigator() {
  return (
    <AuthStack.Navigator initialRouteName='SignInScreen' headerMode='none'>
      <AuthStack.Screen name='SignInScreen' component={SignInScreen} />
      <AuthStack.Screen name='ResetPasswordScreen' component={ResetPasswordScreen} />
      <AuthStack.Screen name='RegisterScreen' component={RegisterScreen} />
    </AuthStack.Navigator>
  );
}
