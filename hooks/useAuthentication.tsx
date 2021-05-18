import React, { useEffect } from 'react';
import * as Facebook from 'expo-facebook';
import * as Google from 'expo-auth-session/providers/google';
import firebase from 'firebase';

import { FACEBOOK_APP_ID, GOOGLE_CLIENT_ID } from '@env';

export default function useAuthentication() {
  const initCollection = (userId: string) => {
    firebase
      .firestore()
      .collection('favourites')
      .doc(userId)
      .set({
        movies: [],
      })
      .then(() => {
        console.log('Collection init');
      });
  };

  const logout = async () => {
    await firebase.auth().signOut();
  };

  const registerWithEmail = async (email: string, password: string) => {
    const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
    const userId = user.user?.uid;
    if (userId) {
      initCollection(userId);
    }
  };

  const loginWithEmail = async (email: string, password: string) => {
    firebase.auth().signInWithEmailAndPassword(email, password);
  };

  const loginWithFacebook = async () => {
    await Facebook.initializeAsync({ appId: FACEBOOK_APP_ID });

    const { type, token } = await Facebook.logInWithReadPermissionsAsync({
      permissions: ['public_profile'],
    });
    if (type === 'success' && token) {
      const facebookCredential = firebase.auth.FacebookAuthProvider.credential(token);
      const user = await firebase.auth().signInWithCredential(facebookCredential);
      const userId = user.user?.uid;
      if (userId) {
        initCollection(userId);
      }
    }
  };

  const [request, response, loginWithGoogle] = Google.useIdTokenAuthRequest({
    clientId: GOOGLE_CLIENT_ID,
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;

      const credential = firebase.auth.GoogleAuthProvider.credential(id_token);
      firebase
        .auth()
        .signInWithCredential(credential)
        .then((user) => {
          const userId = user.user?.uid;
          if (userId) {
            initCollection(userId);
          }
        });
    }
  }, [response]);

  return { registerWithEmail, loginWithEmail, loginWithFacebook, loginWithGoogle, logout };
}
