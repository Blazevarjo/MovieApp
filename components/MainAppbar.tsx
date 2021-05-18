import React, { useEffect, useState } from 'react';
import { Appbar, Menu, Searchbar, useTheme } from 'react-native-paper';
import { setStatusBarBackgroundColor } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View } from 'react-native';
import { useAuthentication } from '../hooks';

type Props = {
  isSearchBar?: boolean | false;
  onSearch?: (query: string) => void;
};

export default function MainAppbar({ isSearchBar, onSearch }: Props) {
  const { logout } = useAuthentication();
  const colors = useTheme().colors;

  const [isSearchBarVisible, setIsSearchBarVisible] = useState<boolean>(false);
  const [isProfileVisible, setIsProfileVisible] = useState<boolean>(false);

  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    setStatusBarBackgroundColor(colors.primaryDark, true);
  }, []);

  const fetchMovies = () => {
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  return (
    <>
      {isSearchBarVisible ? (
        <SafeAreaView>
          <Searchbar
            autoFocus={true}
            blurOnSubmit={true}
            placeholder='Search'
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
            onBlur={() => {
              console.log('blur');
              setIsSearchBarVisible(false);
            }}
            onSubmitEditing={() => fetchMovies()}
            onIconPress={() => {
              fetchMovies();
              setIsSearchBarVisible(false);
            }}
          />
        </SafeAreaView>
      ) : (
        <Appbar.Header>
          <Appbar.Content title='Movies' />
          {isSearchBar && (
            <Appbar.Action icon='magnify' onPress={() => setIsSearchBarVisible(true)} />
          )}
          <Menu
            anchor={
              <Appbar.Action
                color='white'
                icon='account'
                onPress={() => setIsProfileVisible(true)}
              />
            }
            style={styles.menu}
            contentStyle={styles.menuContent}
            visible={isProfileVisible}
            onDismiss={() => setIsProfileVisible(false)}
          >
            <Menu.Item
              title='Logout'
              onPress={() => {
                logout();
                setIsProfileVisible(false);
              }}
            />
          </Menu>
        </Appbar.Header>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  menu: {
    position: 'absolute',
    top: 85,
    height: 30,
    width: 100,
    elevation: 4,
  },
  menuContent: {
    paddingVertical: 0,
  },
});
