# MovieApp [![GitHub license](https://img.shields.io/github/license/Blazevarjo/Pokedex.Api)](https://github.com/Blazevarjo/Pokedex.Api/blob/master/LICENSE)


[MovieApp](https://github.com/Blazevarjo/MovieApp) is a mobile app that can be used to search movies and mark them as our favourites. App uses firebase as a backend to store data and authenticate users by email, facebook or google.

# Table of contents
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Context](#usage)
- [Status](#status)
- [License](#license)

# Technologies

- TypeScript
- Expo
- React Native
- React Navigation
- React Native Paper (Material Design)
- Formik
- Firebase

## Installation

### Prerequisites

Node and expo are required. Accounts for [facebook dev](https://developers.facebook.com/), [google dev](https://developers.google.com/) and [firebase](https://firebase.google.com/) are necessary.

#### Windows and macOS

to run the app you need to have android studio and android device which can be either emulator or android device.

### Setup

1. Create .env file in the root directory with the config of environment variables. [Here](.env-example) you can check the example of the configuration.
2. Install dependecies
```bash
expo add
```
3. Run application

```bash
expo start --android
```

## Usage

### Sign in and log out

<div align="center">
  <img src="https://user-images.githubusercontent.com/46849151/120861618-df260600-c587-11eb-93fd-f17ed2504b54.gif" width=310/>
  <img src="https://user-images.githubusercontent.com/46849151/120861681-f49b3000-c587-11eb-9d7c-b0044c6f8384.gif" width=310/>
</div>

### Movies

<div align="center">
  <img src="https://user-images.githubusercontent.com/46849151/120863907-af78fd00-c58b-11eb-904f-76222c0c11ba.gif" width=310/>
  <img src="https://user-images.githubusercontent.com/46849151/120864124-01ba1e00-c58c-11eb-8b63-198363e3781f.gif" width=310/>
  <img src="https://user-images.githubusercontent.com/46849151/120864150-0bdc1c80-c58c-11eb-8e8d-4459d69fd7a2.gif" width=310/>
</div>


## Context

Mainly purpose of this app was to get familiar with Expo, TypeScript and firebase.


## Status

Currently, the app is considered as finished, but there are some features that I am willing to add soon.

- [ ] Reset password functionality and screen
- [ ] Detailed screen of the chosen movie

## License

[MIT](LICENSE)
