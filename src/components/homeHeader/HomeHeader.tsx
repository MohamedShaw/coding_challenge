import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {styles} from './style';
import {useSelector} from 'react-redux';
import {RootStore} from 'store';
import {Notification} from './Notification';
import {Location} from './Location';

interface Props {}

export const HomeHeader = (props: Props) => {
  const {} = props;
  const {borderColor, backgroundColor} = useSelector(
    (state: RootStore) => state.theme.colors,
  );

  return (
    <>
      <SafeAreaView style={{backgroundColor}} />
      <View style={[styles.container, {backgroundColor, borderColor}]}>
        <Notification />
        <Location />
      </View>
    </>
  );
};
