import { MOVIE_API_KEY } from '@env';
import { Movie } from './types';

export const fetchPopularMovies = async (): Promise<Array<Movie>> => {
  const result = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${MOVIE_API_KEY}&language=en-US`
  );
  const data = await result.json();
  const movies: Array<Movie> = data.results.map((item: any) => {
    return {
      id: item.id,
      title: item.title,
      poster: 'https://image.tmdb.org/t/p/w500' + item.poster_path,
      rating: item.vote_average,
      isFavourite: false,
    };
  });
  return movies;
};

export const fetchSearchMovies = async (query: string): Promise<Array<Movie>> => {
  const result = await fetch(
    `https://api.themoviedb.org/3/search/movie?language=en-US&include_adult=false&api_key=${MOVIE_API_KEY}&query=${query}`
  );
  const data = await result.json();
  const movies: Array<Movie> = data.results.map((item: any) => {
    return {
      id: item.id,
      title: item.title,
      poster: 'https://image.tmdb.org/t/p/w500' + item.poster_path,
      rating: item.vote_average,
      isFavourite: false,
    };
  });
  return movies;
};

export const fetchMovieById = async (movieId: number): Promise<Movie> => {
  const result = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=${MOVIE_API_KEY}`
  );
  const data = await result.json();
  const movie: Movie = {
    id: data.id,
    title: data.title,
    poster: 'https://image.tmdb.org/t/p/w500' + data.poster_path,
    rating: data.vote_average,
    isFavourite: false,
  };
  return movie;
};

export const fetchMoviesByIds = async (movieIds: Array<number>): Promise<Array<Movie>> => {
  const result: Array<Movie> = [];
  for (const id of movieIds) {
    const movie = await fetchMovieById(id);
    result.push(movie);
  }
  return result;
};
