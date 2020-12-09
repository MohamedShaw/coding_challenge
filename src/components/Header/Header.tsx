import {AppIconButton} from 'common/iconButton/IconButton';
import React, {ReactElement} from 'react';
import {SafeAreaView, View, Platform} from 'react-native';
import {AppText} from 'common/text/Text';
import {IconType} from 'common/utils/icon';
import {styles} from './styles';
import {FixedNeomorphContainer} from 'common/fixedneomorphContainer/FixedNeomorphContainer';
import {useSelector} from 'react-redux';
import {RootStore} from 'store';
import {AppNavigation} from 'navigation';

interface Props {
  title?: string;
  hideBack?: boolean;
  rightItem?: ReactElement;
  onBackPress?: () => void;
}

export const AppHeader = (props: Props) => {
  const {
    title,
    hideBack,
    rightItem,
    onBackPress = () => AppNavigation.pop(),
  } = props;
  const {iconColor, backgroundColor} = useSelector(
    (state: RootStore) => state.theme.colors,
  );

  return (
    <>
      <SafeAreaView style={{backgroundColor}} />
      <View style={[styles.container, {backgroundColor}]}>
        <View style={[styles.left, styles.items]}>
          {!hideBack && (
            <FixedNeomorphContainer style={styles.back_icon_container}>
              <AppIconButton
                onPress={onBackPress}
                style={styles.back_icon}
                // containerStyle={styles.back_icon_container}
                // type=
                name="back"
                size={24}
                color={iconColor}
              />
            </FixedNeomorphContainer>
          )}
        </View>
        <View style={[styles.content, styles.items]}>
          <AppText style={styles.title}>{title}</AppText>
        </View>
        <View style={[styles.right, styles.items]}>{rightItem}</View>
      </View>
    </>
  );
};
