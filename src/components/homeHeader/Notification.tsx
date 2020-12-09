import React from 'react';
import {AppIconButton, IconType, FixedNeomorphContainer} from 'common';
import {styles} from './style';
import {useSelector} from 'react-redux';
import {RootStore} from 'store';
import {AppText} from '../../common/text/Text';
import {View} from 'react-native';

interface Props {}

export const Notification = (props: Props) => {
  const {} = props;
  const {iconColor, primary, white} = useSelector(
    (state: RootStore) => state.theme.colors,
  );

  return (
    <FixedNeomorphContainer style={styles.notification_container}>
      <AppIconButton
        onPress={() => {}}
        name="notifications"
        type={IconType.materialIcons}
        size={24}
        color={iconColor}
      />
      <View
        style={[
          styles.notification_text_container,
          {backgroundColor: primary, borderColor: white},
        ]}>
        <AppText style={[styles.notification_text, {color: white}]}>2</AppText>
      </View>
    </FixedNeomorphContainer>
  );
};
