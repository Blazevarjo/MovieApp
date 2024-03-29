import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { fetchPopularMovies, fetchSearchMovies } from '../api';

import { MainAppbar, MovieCard } from '../components';
import { useMoviesStore } from '../hooks';
import { Movie } from '../types';

export default function AllMoviesScreen() {
  const { favouriteMoviesIds, toggleFavourite } = useMoviesStore();

  const [movies, setMovies] = useState<Array<Movie>>([]);

  useEffect(() => {
    getPopularMovies();
  }, []);

  useEffect(() => {
    updateMovies(movies);
  }, [favouriteMoviesIds]);

  const getPopularMovies = async () => {
    const data = await fetchPopularMovies();
    updateMovies(data);
  };

  const searchMovies = async (query: string) => {
    const data = await fetchSearchMovies(query);
    updateMovies(data);
  };

  const updateMovies = (data: Array<Movie>) => {
    const movies = data.map((movie) => {
      movie.isFavourite = favouriteMoviesIds.includes(movie.id);
      return movie;
    });
    setMovies(movies);
  };

  const renderMovie = useCallback(
    ({ item }) => (
      <MovieCard
        movie={item}
        onPress={() => console.log(item.poster)}
        onPressFavourite={() => toggleFavourite(item.id)}
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
