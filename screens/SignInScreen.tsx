import React, { useState } from 'react';
import { Dimensions, ImageBackground, SafeAreaView, StyleSheet, View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';

export default function SignInScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const height = Dimensions.get('screen').height;

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ImageBackground
        source={require('../assets/images/sign-in-bg.png')}
        imageStyle={styles.backgroundImage}
        style={[styles.backgroundContainer, { height: height * 0.35 }]}
      >
        <Text style={styles.helloText}>Hello</Text>
      </ImageBackground>
      <View style={styles.contentContainer}>
        <Text style={styles.signInText}>Sign in to your account</Text>
        <TextInput
          style={styles.input}
          mode='outlined'
          label='E-mail'
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          mode='outlined'
          label='Password'
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Text style={styles.resetPassword}>Forgot your password?</Text>
      </View>
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
    flex: 1,
    marginHorizontal: 45,
  },
  signInText: {
    fontSize: 28,
    textAlign: 'center',
    paddingVertical: 15,
  },
  input: {
    height: 50,
    marginVertical: 5,
  },
  resetPassword: {
    fontSize: 15,
    color: '#C1C1C1',
    textAlign: 'right',
    marginVertical: 5,
  },
});
