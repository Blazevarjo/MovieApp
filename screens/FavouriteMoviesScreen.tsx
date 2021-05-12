import React from 'react';
import { SafeAreaView } from 'react-native';
import { Headline } from 'react-native-paper';

export default function FavouriteMoviesScreen() {
  return (
    <SafeAreaView style={{ justifyContent: 'center', alignContent: 'center', flex: 1 }}>
      <Headline>Favourite Movies</Headline>
    </SafeAreaView>
  );
}
