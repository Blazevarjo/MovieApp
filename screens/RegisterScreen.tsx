import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Divider, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AuthForm, BackAppbar, SocialButtons } from '../components';

export default function RegisterScreen() {
  return (
    <>
      <BackAppbar title='Register' />
      <SafeAreaView style={styles.container}>
        <View style={styles.registerContainer}>
          <Text style={styles.createText}>Create new account</Text>
          <AuthForm type='register' />
          <Divider style={styles.divider} />
          <Text style={styles.socialText}>Or sign in with your social account</Text>
          <SocialButtons />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  registerContainer: {
    marginHorizontal: 36,
  },
  createText: {
    fontSize: 28,
    textAlign: 'center',
    marginVertical: 15,
  },
  divider: {
    marginVertical: 30,
    marginHorizontal: -10,
    backgroundColor: 'black',
  },
  socialText: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 15,
  },
});
