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
import { Formik } from 'formik';
import { SocialIcon } from 'react-native-elements';

import { ValueType } from '../enums';
import { CustomInputText } from '../components';
import { useAuthentication } from '../hooks';

type LoginInitValues = {
  email: string;
  password: string;
};

export default function SignInScreen() {
  const initValues: LoginInitValues = { email: '', password: '' };
  const height = Dimensions.get('screen').height;
  const { loginWithEmail, loginWithFacebook, loginWithGoogle } = useAuthentication();

  const validateEmail = (values: { email: string; password: string }) => {
    let errors: { email?: string; password?: string } = {};

    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.password) {
      errors.password = 'Password required';
    } else if (values.password.length < 8) {
      errors.password = 'Password to short, must have at least 8 characters';
    }
    return errors;
  };

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
        <Formik
          initialValues={initValues}
          onSubmit={({ email, password }) => loginWithEmail(email, password)}
          validate={validateEmail}
        >
          {({ errors, values, handleChange, handleBlur, handleSubmit }) => (
            <View style={styles.form}>
              <CustomInputText
                label='E-mail'
                value={values.email}
                error={errors.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                valueType={ValueType.Email}
              />

              <CustomInputText
                label='Password'
                value={values.password}
                error={errors.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                valueType={ValueType.Password}
              />
              <Text style={styles.resetPassword}>Forgot your password?</Text>
              <Button
                color='black'
                style={styles.signInButton}
                contentStyle={styles.signInButtonContent}
                icon='arrow-right'
                mode='outlined'
                onPress={handleSubmit}
              >
                Sign in
              </Button>
            </View>
          )}
        </Formik>
      </View>
      <Divider style={styles.divider} />
      <KeyboardAvoidingView style={styles.socialContainer}>
        <View style={styles.iconsContainer}>
          <SocialIcon
            iconType='font-awesome'
            title='Sign in with Facebook'
            fontStyle={styles.socialButtonText}
            iconColor='white'
            raised={true}
            iconSize={24}
            style={styles.socialButton}
            type='facebook'
            button
            onPress={() => loginWithFacebook()}
          />
          <SocialIcon
            iconType='font-awesome'
            title='Sign in with Google'
            fontStyle={styles.socialButtonText}
            iconColor='white'
            raised={true}
            iconSize={24}
            style={styles.socialButton}
            type='google'
            button
            onPress={() => loginWithGoogle()}
          />
        </View>
        <View style={styles.registerContainer}>
          <Text style={styles.createText}>Don’t have an account?</Text>
          <Button
            color='black'
            style={styles.signInButton}
            contentStyle={styles.signInButtonContent}
            icon='arrow-right'
            mode='outlined'
            compact={true}
          >
            Create
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
    marginHorizontal: 45,
  },
  signInText: {
    fontSize: 28,
    textAlign: 'center',
    marginVertical: 15,
  },
  form: {
    justifyContent: 'center',
  },
  resetPassword: {
    fontSize: 15,
    color: '#C1C1C1',
    textAlign: 'right',
    marginVertical: 5,
  },
  signInButton: {
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  signInButtonContent: {
    flexDirection: 'row-reverse',
  },
  divider: {
    marginTop: 15,
    marginBottom: 5,
    backgroundColor: 'black',
  },
  socialContainer: {
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: 16,
    marginHorizontal: 45,
  },
  iconsContainer: {
    alignContent: 'center',
    justifyContent: 'space-evenly',
  },
  socialButton: {
    height: 55,
    padding: 0,
    borderRadius: 12,
    marginVertical: 10,
  },
  socialButtonText: {
    fontSize: 16,
  },
  registerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  createText: {
    marginTop: 10,
    fontSize: 16,
  },
});
