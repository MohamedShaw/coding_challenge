import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {IntroView, SkipButton, PhoneButton} from 'components';
import {AppScreenContainer} from 'common';
import {styles} from './style';

export const Intro: NavigationFunctionComponent = (props) => {
  return (
    <AppScreenContainer style={styles.conatiner}>
      <SafeAreaView />
      <IntroView />
      <SkipButton />
      <SafeAreaView />
    </AppScreenContainer>
  );
};
