import React from 'react';
import {
  Dimensions,
  ImageBackground,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import { Button, Divider, Text } from 'react-native-paper';

import { AuthForm, SocialButtons } from '../components';
import { useAuthentication } from '../hooks';

export default function SignInScreen() {
  const height = Dimensions.get('screen').height;
  const { loginWithFacebook, loginWithGoogle } = useAuthentication();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ImageBackground
        source={require('../assets/images/sign-in-bg.png')}
        imageStyle={styles.backgroundImage}
        style={[styles.backgroundContainer, { height: height * 0.25 }]}
      >
        <Text style={styles.helloText}>Hello</Text>
      </ImageBackground>
      <View style={styles.contentContainer}>
        <Text style={styles.signInText}>Sign in to your account</Text>
        <AuthForm type='login' />
      </View>
      <Divider style={styles.divider} />
      <KeyboardAvoidingView style={styles.socialContainer}>
        <SocialButtons
          socials={[
            { title: 'facebook', onPress: loginWithFacebook },
            { title: 'google', onPress: loginWithGoogle },
          ]}
        />
        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>Don’t have an account?</Text>
          <Button
            color='black'
            style={styles.registerButton}
            contentStyle={styles.registerButtonContent}
            icon='arrow-right'
            mode='outlined'
            compact={true}
          >
            Register
          </Button>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  backgroundContainer: {
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
  },
  backgroundImage: {
    width: '100%',
    resizeMode: 'stretch',
  },
  helloText: {
    fontSize: 70,
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
  },
  contentContainer: {
    marginHorizontal: 36,
  },
  signInText: {
    fontSize: 28,
    textAlign: 'center',
    marginVertical: 15,
  },
  divider: {
    marginTop: 15,
    marginBottom: 10,
    backgroundColor: 'black',
  },
  socialContainer: {
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: 16,
    marginHorizontal: 36,
  },
  registerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  registerText: {
    fontSize: 16,
  },
  registerButton: {
    alignSelf: 'flex-end',
  },
  registerButtonContent: {
    flexDirection: 'row-reverse',
  },
});
