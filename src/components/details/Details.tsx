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
import {Tags} from './Tags';

interface Props {
  gender?: string;
  status?: string;
  name?: string;
  species?: string;
}

export const Details: React.FC<Props> = (props) => {
  const {name, id, image, gender, species, status} = props;
  const {titleColor, primary} = useSelector(
    (state: RootStore) => state.theme.colors,
  );
  return (
    <View style={styles.container}>
      <AppImage source={{uri: image}} style={{flex: 1}} resizeMode="stretch">
        <Tags gender={gender} status={status} />
        <View style={styles.textContainter}>
          <AppText style={[styles.text, {fontWeight: 'Regular'}]}>
            {name}
          </AppText>
        </View>
      </AppImage>
    </View>
  );
};
