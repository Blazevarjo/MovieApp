import React, { createContext, ReactNode, useEffect, useState } from 'react';
import firebase from 'firebase';

type UserId = string | undefined;
type IsAuthenticated = boolean;

type ContextValues = {
  userId: UserId;
  isAuthenticated: IsAuthenticated;
};

export const AuthContext = createContext<ContextValues>({
  isAuthenticated: false,
  userId: undefined,
});

type Props = {
  children: ReactNode;
};

export const AuthContextProvider = ({ children }: Props) => {
  const [userId, setUserId] = useState<UserId>();
  const [isAuthenticated, setIsAuthenticated] = useState<IsAuthenticated>(false);

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged((user) => {
      setUserId(user?.uid);
    });
    return subscriber;
  }, []);

  useEffect(() => {
    setIsAuthenticated(userId != null);
  }, [userId]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, userId }}>{children}</AuthContext.Provider>
  );
};
