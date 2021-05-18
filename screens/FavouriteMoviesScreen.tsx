import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { fetchMovieById, fetchMoviesByIds } from '../api';

import { MainAppbar, MovieCard } from '../components';
import { useMoviesStore } from '../hooks';
import { Movie } from '../types';

export default function FavouriteMoviesScreen() {
  const { favouriteMoviesIds, toggleFavourite } = useMoviesStore();

  const [movies, setMovies] = useState<Array<Movie>>([]);

  const isInit = useRef(true);
  useEffect(() => {
    if (isInit.current && favouriteMoviesIds.length > 0) {
      loadMovies();
      isInit.current = false;
    } else {
      if (movies.length > favouriteMoviesIds.length) {
        updateMovies(movies.filter((movie) => favouriteMoviesIds.includes(movie.id)));
      } else if (movies.length < favouriteMoviesIds.length) {
        const id = favouriteMoviesIds.find((id) => !movies.map((movie) => movie.id).includes(id));
        if (!id) {
          return;
        }
        loadMovie(id).then((movie) => {
          updateMovies([...movies, movie]);
        });
      }
    }
  }, [favouriteMoviesIds]);

  const loadMovie = async (id: number) => {
    const fetchedMovie = await fetchMovieById(id);
    return fetchedMovie;
  };

  const loadMovies = async () => {
    const fetchedMovies = await fetchMoviesByIds(favouriteMoviesIds);
    updateMovies(fetchedMovies);
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
      <MainAppbar />
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
