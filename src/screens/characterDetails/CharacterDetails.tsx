import React, {useState} from 'react';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {styles} from './style';
import {AppHeader, Details} from 'components';
import {AppScreenContainer, AppList} from 'common';
import {EpisodeList} from 'containers';
interface Props {
  species?: string;
}
export const CharacterDetails: NavigationFunctionComponent = (props: Props) => {
  console.log('props ==>>', props);

  const {species} = props;
  return (
    <AppScreenContainer style={styles.conatiner}>
      {/* species */}
      <AppHeader title={species} />
      <Details {...props} />
      <EpisodeList />
    </AppScreenContainer>
  );
};
