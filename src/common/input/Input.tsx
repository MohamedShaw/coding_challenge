import React, {forwardRef, ReactNode, useState} from 'react';
import {
  TextInputProps,
  PixelRatio,
  TextInput,
  View,
  ViewStyle,
  TextInputFocusEventData,
  NativeSyntheticEvent,
  StyleProp,
  StyleSheet,
} from 'react-native';
import {AppText} from 'common/text/Text';
import {useSelector} from 'react-redux';
import {RootStore} from 'store';
import {styles} from './style';
import {InnerNeomorphContainer} from '../innerNeomorphContainer/InnerNeomorphContainer';
import {IconType} from 'common/utils/icon';
import {AppIconButton} from 'common/iconButton/IconButton';
import {CustomTextStyle} from 'common/text/Text';

interface Props extends Omit<TextInputProps, 'style'> {
  label?: string;
  containerStyle?: ViewStyle | ViewStyle[];
  style?: StyleProp<CustomTextStyle>;
  error?: string;
  value: string;
  noValidation?: boolean;
  leftItem?: ReactNode;
  rightItem?: ReactNode;
  // touched?: boolean;
}

export const AppInput = forwardRef<TextInput, Props>((props, ref) => {
  const {
    label,
    leftItem,
    rightItem,
    containerStyle,
    style,
    error,
    noValidation,
    secureTextEntry,
    onBlur,
    onFocus,
    ...rest
  } = props;

  const {
    colors: {
      primary,
      textColor,
      textHintColor,
      errorTextColor,
      placeHolderColor,
      iconColor,
    },
    fonts,
  } = useSelector((state: RootStore) => state.theme);

  const [isFocus, setIsFocus] = useState(false);
  const [isPasswordHidden, hiddenPassword] = useState(secureTextEntry);

  const fontFamily =
    fonts[StyleSheet.flatten<CustomTextStyle>(style)?.fontWeight || 'Regular'];
  const styleWithOutFontWeight: Omit<
    CustomTextStyle,
    'fontWeight'
  > = StyleSheet.flatten<CustomTextStyle>(style);

  const _onFocus = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocus(true);
    if (onFocus) onFocus(event);
  };

  const _onBlure = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocus(false);
    if (onBlur) onBlur(event);
  };

  let labelTextColor = textColor;
  let inputTextColor = textHintColor;
  let _iconColor = iconColor;

  if (isFocus) {
    labelTextColor = primary;
    inputTextColor = textColor;
    _iconColor = primary;
  }

  if (error) {
    labelTextColor = errorTextColor;
  }

  return (
    <View style={containerStyle}>
      <InnerNeomorphContainer
        style={{
          height: 58,
          alignSelf: 'stretch',
        }}>
        <View style={styles.container}>
          {leftItem}
          <View style={styles.content}>
            {!!label && (
              <AppText style={[styles.label, {color: labelTextColor}]}>
                {label}
              </AppText>
            )}
            <TextInput
              ref={ref}
              secureTextEntry={isPasswordHidden}
              placeholderTextColor={placeHolderColor}
              onFocus={_onFocus}
              onBlur={_onBlure}
              style={[
                styles.input,
                {color: inputTextColor},
                styleWithOutFontWeight,
                {
                  fontFamily,
                },
              ]}
              {...rest}
            />
          </View>
          {secureTextEntry && (
            <AppIconButton
              enabled={props.value.length > 0}
              color={_iconColor}
              onPress={() => hiddenPassword(!isPasswordHidden)}
              containerStyle={styles.show_password_icon}
              size={28}
              // type={IconType.ionicons}
              name={isPasswordHidden ? 'eye-disable' : 'eye-able'}
            />
          )}
          {rightItem}
        </View>
      </InnerNeomorphContainer>
      {!noValidation && (
        <AppText style={[styles.error, {color: errorTextColor}]}>
          {error}
        </AppText>
      )}
    </View>
  );
});
