import React from 'react';
import {
  KeyboardType,
  TextInputAndroidProps,
  TextInputIOSProps,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  View,
} from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';

import { ValueType } from '../enums';

type Props = {
  label: string;
  value: string;
  valueType: ValueType;
  onBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onChangeText: (text: string) => void;
  error: string | undefined;
};

type ValueTypeProps = {
  keyboardType: KeyboardType;
  textContentType: TextInputIOSProps['textContentType'];
  autoCompleteType: TextInputAndroidProps['autoCompleteType'];
  secureTextEntry?: boolean;
};

const getValueTypeProps = (valueType: ValueType): ValueTypeProps => {
  switch (valueType) {
    case ValueType.Email:
      return {
        keyboardType: 'email-address',
        textContentType: 'emailAddress',
        autoCompleteType: 'email',
      };
    case ValueType.Password:
      return {
        keyboardType: 'default',
        textContentType: 'password',
        autoCompleteType: 'password',
        secureTextEntry: true,
      };
    case ValueType.NewPassword:
      return {
        keyboardType: 'default',
        textContentType: 'newPassword',
        autoCompleteType: 'password',
        secureTextEntry: true,
      };
  }
};

export default function CustomInputText({
  error,
  label,
  value,
  valueType,
  onBlur,
  onChangeText,
}: Props) {
  const valueTypeProps = getValueTypeProps(valueType);

  return (
    <>
      <TextInput
        style={styles.input}
        mode='outlined'
        underlineColor='red'
        label={label}
        value={value}
        error={error ? true : false}
        onChangeText={onChangeText}
        onBlur={onBlur}
        {...valueTypeProps}
      />
      <HelperText type='error' visible={error ? true : false}>
        {error}
      </HelperText>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
  },
});
