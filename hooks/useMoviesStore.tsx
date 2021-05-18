import React, { useContext, useEffect, useState } from 'react';
import firebase from 'firebase';
import { AuthContext } from '../contexts';

export default function useMoviesStore() {
  const { userId } = useContext(AuthContext);
  const [favouriteMoviesIds, setFavouriteMoviesIds] = useState<Array<number>>([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection('favourites')
      .doc(userId)
      .onSnapshot((snapshot) => {
        const movies = snapshot.data()?.movies;
        setFavouriteMoviesIds(movies);
      });
  }, []);

  const toggleFavourite = async (movieId: number) => {
    const document = firebase.firestore().collection('favourites').doc(userId);
    const data = await document.get();
    const movies: Array<number> = data.data()?.movies;
    if (movies.includes(movieId)) {
      document.update({
        movies: firebase.firestore.FieldValue.arrayRemove(movieId),
      });
    } else {
      document.update({
        movies: firebase.firestore.FieldValue.arrayUnion(movieId),
      });
    }
  };

  return { favouriteMoviesIds, toggleFavourite };
}
