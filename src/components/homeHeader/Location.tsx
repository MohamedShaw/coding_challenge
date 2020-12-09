import React from 'react';
import {styles} from './style';
import {NeomorphContainer, IconType, AppIcon, AppText} from 'common';
import {useSelector} from 'react-redux';
import {RootStore} from 'store';
import {BorderlessButton} from 'react-native-gesture-handler';
import {color} from 'react-native-reanimated';
import {View} from 'react-native';

interface Props {}

export const Location = (props: Props) => {
  const {} = props;
  const {iconColor, primary, textHintColor} = useSelector(
    (state: RootStore) => state.theme.colors,
  );

  return (
    <NeomorphContainer style={styles.location_container}>
      {/* <View style={styles.location_content}>
        <BorderlessButton> */}
      <View style={styles.location_content}>
        <AppIcon
          style={styles.location_icon}
          name="location"
          // type={IconType.materialIcons}
          size={30}
          color={primary}
        />
        <AppText
          style={[styles.location_text, {color: textHintColor}]}
          numberOfLines={1}>
          ismailia, 234 Elsekaelhade ismailia, 234 Elsekaelhade
        </AppText>
        <AppIcon
          style={styles.location_icon}
          name="keyboard-arrow-down"
          type={IconType.materialIcons}
          size={21}
          color={iconColor}
        />
      </View>
      {/* </BorderlessButton>
      </View> */}
    </NeomorphContainer>
  );
};
