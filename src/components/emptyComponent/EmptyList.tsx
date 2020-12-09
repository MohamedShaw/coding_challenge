import React from 'react';
import {View} from 'react-native';
import {AppText} from 'common';
import {useSelector} from 'react-redux';
import {RootStore} from 'store';

interface Props {}

export const EmptyList: React.FC<Props> = () => {
  const {
    colors: {primary, titleColor, buttonTextColor, white},
  } = useSelector((state: RootStore) => state.theme);
  return (
    <View
      style={{
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 30,
      }}>
      <AppText style={{color: primary}}>Opps , no data Try Again</AppText>
    </View>
  );
};
