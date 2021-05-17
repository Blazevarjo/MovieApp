import React, { useEffect } from 'react';
import { ThemeProvider } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import firebase from 'firebase';

import Navigation from './navigation';
import firebaseConfig from './firebaseConfig';
import { Theme } from './theme';
import { AuthContextProvider } from './contexts';

export default function App() {
  firebase.initializeApp(firebaseConfig);

  return (
    <AuthContextProvider>
      <ThemeProvider theme={Theme}>
        <Navigation />
        <StatusBar />
      </ThemeProvider>
    </AuthContextProvider>
  );
}
