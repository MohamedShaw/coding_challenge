/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  AppText,
  AppImage,
  FixedInnerNeomorphContainer,
  InnerNeomorphContainer,
  AppButton,
} from 'common';
import {styles} from './style';
import {View, ViewStyle} from 'react-native';
import {useSelector} from 'react-redux';
import {RootStore} from 'store';
import {AppNavigation} from 'navigation';
import {RectButton} from 'react-native-gesture-handler';

interface Props {
  name: string;
  style?: ViewStyle;
  image?: string;
}

export const RickMortyCard: React.FC<Props> = (props: Props) => {
  const {name, style, image} = props;
  const {titleColor, primary} = useSelector(
    (state: RootStore) => state.theme.colors,
  );
  return (
    <InnerNeomorphContainer
      style={{
        flex: 1,
      }}>
      <RectButton
        style={{
          height: 105,
          alignSelf: 'stretch',
          backgroundColor: 'transparent',
        }}
        onPress={() => {
          AppNavigation.push('characterDetails', {
            ...props,
          });
        }}>
        <View style={[styles.container]}>
          <AppImage source={{uri: image}} style={styles.imageContainer} />
          <View style={styles.textContainer}>
            <AppText
              style={[
                styles.title,
                {color: titleColor, fontWeight: 'SemiBold'},
              ]}>
              {name}
            </AppText>
          </View>
        </View>
      </RectButton>
    </InnerNeomorphContainer>
  );
};
