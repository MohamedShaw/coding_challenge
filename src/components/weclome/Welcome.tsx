import {AppAvatar} from 'common';
import React from 'react';
import {View} from 'react-native';
import {AppText} from 'common';
import {styles} from './style';

interface Props {}

export const Welcome: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <AppText style={[styles.text, {fontWeight: 'SemiBold'}]}>
        Hey Ahmed, What item{'\n'}are you looking for?
      </AppText>
      <AppAvatar size={38} />
    </View>
  );
};
