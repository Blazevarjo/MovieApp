import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import firebase from 'firebase';

import Navigation from './navigation';
import firebaseConfig from './firebaseConfig';

export default function App() {
  useEffect(() => {
    firebase.initializeApp(firebaseConfig);
  }, []);

  return (
    <SafeAreaProvider>
      <Navigation />
      <StatusBar />
    </SafeAreaProvider>
  );
}
