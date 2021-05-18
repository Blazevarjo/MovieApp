export type RootStackParamList = {
  Root: undefined;
  Auth: undefined;
};

export type BottomTabParamList = {
  AllMoviesScreen: undefined;
  FavouriteMoviesScreen: undefined;
};

export type AuthStackParamList = {
  SignInScreen: undefined;
  ResetPasswordScreen: undefined;
  RegisterScreen: undefined;
};

export type Movie = {
  id: number;
  title: string;
  poster: string;
  rating: number;
  isFavourite: boolean;
};
