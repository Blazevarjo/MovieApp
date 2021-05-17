import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { Formik } from 'formik';

import { ValueType } from '../enums';
import CustomInputText from './CustomInputText';
import { useAuthentication } from '../hooks';

type LoginValues = {
  email: string;
  password: string;
};

type Props = {
  type: 'register' | 'login';
};

export default function AuthForm({ type }: Props) {
  const { loginWithEmail } = useAuthentication();

  const initValues: LoginValues = { email: '', password: '' };

  const validateEmail = (values: LoginValues) => {
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
    <>
      <Formik
        initialValues={initValues}
        onSubmit={({ email, password }: LoginValues) => {
          if (type === 'login') {
            loginWithEmail(email, password);
          } else if (type === 'register') {
            console.log('register');
          }
        }}
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
            {type === 'login' && <Text style={styles.resetPassword}>Forgot your password?</Text>}
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
    </>
  );
}

const styles = StyleSheet.create({
  form: {
    justifyContent: 'center',
  },
  resetPassword: {
    fontSize: 15,
    color: '#C1C1C1',
    textAlign: 'right',
    marginTop: -10,
  },
  signInButton: {
    alignSelf: 'flex-end',
    marginTop: 8,
  },
  signInButtonContent: {
    flexDirection: 'row-reverse',
  },
});
