import React from 'react';
import { Provider, ThemeProvider } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import firebase from 'firebase';

import Navigation from './navigation';
import { Theme } from './theme';
import { AuthContextProvider } from './contexts';
import {
  API_KEY,
  APP_ID,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  MEASUREMENT_ID,
} from '@env';
import { LogBox } from 'react-native';

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID,
};
LogBox.ignoreLogs(['Setting a timer']);
export default function App() {
  firebase.initializeApp(firebaseConfig);

  return (
    <AuthContextProvider>
      <Provider>
        <ThemeProvider theme={Theme}>
          <Navigation />
          <StatusBar />
        </ThemeProvider>
      </Provider>
    </AuthContextProvider>
  );
}
