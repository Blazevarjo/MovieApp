import React, { useEffect } from 'react';
import { Dimensions, ImageBackground, StyleSheet, View } from 'react-native';
import { Text, Surface, useTheme, TouchableRipple } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Movie } from '../types';

type Props = {
  onPress: () => void;
  onPressFavourite: () => void;
  movie: Movie;
};

export default function MovieCard({ onPress, onPressFavourite, movie }: Props) {
  const width = Dimensions.get('screen').width;

  return (
    <Surface style={[styles.container, { width: width / 2 - 16 }]}>
      <TouchableRipple borderless={true} style={styles.touch} onPress={() => onPress()}>
        <>
          <Text style={styles.rating}>{movie.rating}</Text>
          <MaterialCommunityIcons
            style={styles.favourite}
            name={movie.isFavourite ? 'heart' : 'heart-outline'}
            size={24}
            color='white'
            onPress={() => onPressFavourite()}
          />
          <ImageBackground
            source={
              movie.poster != 'https://image.tmdb.org/t/p/w500null'
                ? { uri: movie.poster }
                : require('../assets/images/no-image.jpg')
            }
            imageStyle={{ resizeMode: 'stretch' }}
            style={{ flex: 1 }}
          />
          <Text style={[styles.name, { color: 'black' }]}>{movie.title}</Text>
        </>
      </TouchableRipple>
    </Surface>
  );
}

const CARD_BORDER_RADIUS = 12;

const styles = StyleSheet.create({
  container: {
    aspectRatio: 3 / 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    borderRadius: CARD_BORDER_RADIUS,
    elevation: 4,
  },
  topContainer: {
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  touch: {
    width: '100%',
    height: '100%',
    borderRadius: CARD_BORDER_RADIUS,
  },
  rating: {
    textAlign: 'center',
    position: 'absolute',
    width: 28,
    height: 24,
    top: 4,
    left: 0,
    fontSize: 18,
    color: 'white',
    marginLeft: 10,
    backgroundColor: 'black',
    opacity: 0.9,
    borderRadius: 5,
    zIndex: 1000,
  },
  favourite: {
    textAlign: 'center',
    width: 28,
    top: 4,
    right: 0,
    position: 'absolute',
    marginRight: 10,
    backgroundColor: 'black',
    opacity: 0.9,
    borderRadius: 5,
    zIndex: 1000,
  },
  name: {
    fontSize: 16,
    margin: 8,
    textAlign: 'center',
  },
});
