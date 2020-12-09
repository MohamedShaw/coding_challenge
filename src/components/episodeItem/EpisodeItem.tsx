/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  AppText,
  AppImage,
  FixedInnerNeomorphContainer,
  InnerNeomorphContainer,
} from 'common';

import {View, ViewStyle} from 'react-native';
import {useSelector} from 'react-redux';
import {RootStore} from 'store';

import {styles} from './styles';

interface Props {}

export const EpisodeItem: React.FC<Props> = (props: Props) => {
  const {gender, status} = props;
  return (
    <InnerNeomorphContainer style={{width: '100%', height: 75}}>
      <View style={styles.tagContainer}>
        <View style={styles.circle}>
          <AppText style={styles.text}>{gender}</AppText>
        </View>
        <View style={styles.circle}>
          <AppText style={styles.text}>{status}</AppText>
        </View>
      </View>
    </InnerNeomorphContainer>
  );
};
