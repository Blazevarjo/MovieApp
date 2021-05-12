import React from 'react';
import { SafeAreaView } from 'react-native';
import { Headline } from 'react-native-paper';

export default function AllMoviesScreen() {
  return (
    <SafeAreaView style={{ justifyContent: 'center', alignContent: 'center', flex: 1 }}>
      <Headline>All Movies</Headline>
    </SafeAreaView>
  );
}
