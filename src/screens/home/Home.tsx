import React, {useState} from 'react';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {styles} from './style';
import {Welcome, AppHeader, RickMortyCard} from 'components';
import {AppScreenContainer, AppList} from 'common';
import {ScrollView} from 'react-native-gesture-handler';
import I18n from 'react-native-i18n';
import {ListHOC} from 'containers';
export const Home: NavigationFunctionComponent = () => {
  return (
    <>
      <AppScreenContainer style={styles.conatiner}>
        <AppHeader hideBack title={I18n.t('welcome')} />

        <ListHOC />
      </AppScreenContainer>
    </>
  );
};
