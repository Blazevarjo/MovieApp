import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { fetchPopularMovies, fetchSearchMovies } from '../api';

import { MainAppbar, MovieCard } from '../components';
import { Movie } from '../types';

export default function MoviesTemplate() {
  const [movies, setMovies] = useState<Array<Movie>>([]);

  useEffect(() => {
    getPopularMovies();
  }, []);

  const getPopularMovies = async () => {
    const movies = await fetchPopularMovies();
    setMovies(movies);
  };

  const searchMovies = async (query: string) => {
    const movies = await fetchSearchMovies(query);
    setMovies(movies);
  };

  const renderMovie = useCallback(
    ({ item }) => (
      <MovieCard
        movie={item}
        onPress={() => console.log(item.poster)}
        onPressFavourite={() => console.log('fav')}
      />
    ),
    []
  );

  const keyExtractor = useCallback((item) => item.id.toString(), []);

  return (
    <>
      <MainAppbar isSearchBar={true} onSearch={searchMovies} />
      <SafeAreaView style={{ justifyContent: 'center', alignContent: 'center', flex: 1 }}>
        <FlatList
          data={movies}
          renderItem={renderMovie}
          keyExtractor={keyExtractor}
          numColumns={2}
        />
      </SafeAreaView>
    </>
  );
}
