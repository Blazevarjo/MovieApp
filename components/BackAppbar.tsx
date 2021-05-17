import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Appbar, useTheme } from 'react-native-paper';
import { setStatusBarBackgroundColor } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/core';

type Props = {
  title: string;
};

export default function BackAppbar({ title }: Props) {
  const colors = useTheme().colors;
  const navigation = useNavigation();

  useEffect(() => {
    setStatusBarBackgroundColor(colors.primaryDark, true);
  }, []);

  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => navigation.goBack()} />
      <Appbar.Content titleStyle={styles.title} title={title} />
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
  },
});
