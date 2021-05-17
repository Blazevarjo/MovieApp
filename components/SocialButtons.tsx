import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { SocialIcon } from 'react-native-elements';
import { SocialMediaType } from 'react-native-elements/dist/social/SocialIcon';

import { useAuthentication } from '../hooks';

type Social = {
  title: SocialMediaType;
  onPress: () => void;
};

type Props = {
  containerStyle?: ViewStyle;
};

export default function SocialButtons({ containerStyle }: Props) {
  const { loginWithFacebook, loginWithGoogle } = useAuthentication();

  const socials: Array<Social> = [
    { title: 'facebook', onPress: loginWithFacebook },
    { title: 'google', onPress: loginWithGoogle },
  ];

  return (
    <View style={[styles.container, containerStyle]}>
      {socials.map(({ onPress, title }, index) => (
        <SocialIcon
          key={index}
          iconType='font-awesome'
          title={`Sign in with ${title[0].toUpperCase() + title.slice(1)}`}
          fontStyle={styles.socialButtonText}
          iconColor='white'
          raised={true}
          iconSize={24}
          style={styles.socialButton}
          type={title}
          button
          onPress={() => onPress()}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    justifyContent: 'space-evenly',
  },
  socialButton: {
    height: 50,
    padding: 0,
    marginHorizontal: 0,
    borderRadius: 12,
    marginVertical: 5,
  },
  socialButtonText: {
    fontSize: 16,
  },
});
