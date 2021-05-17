import React, { useEffect } from 'react';
import { ThemeProvider } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import firebase from 'firebase';

import Navigation from './navigation';
import firebaseConfig from './firebaseConfig';
import { Theme } from './theme';

export default function App() {
  useEffect(() => {
    firebase.initializeApp(firebaseConfig);
  }, []);

  return (
    <ThemeProvider theme={Theme}>
      <Navigation />
      <StatusBar />
    </ThemeProvider>
  );
}
