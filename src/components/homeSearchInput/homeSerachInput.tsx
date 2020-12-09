import React from 'react';
import {View} from 'react-native';
import {styles} from './style';
import {useSelector} from 'react-redux';
import {RootStore} from 'store';
import {
  AppIcon,
  AppText,
  InnerNeomorphContainer,
  IconType,
  AppInput,
} from 'common';

import {Controller, useForm} from 'react-hook-form';
import I18n from 'react-native-i18n';

interface Props {
  onChangeValue?: () => void;
}

export const HomeSearchInput = (props: Props) => {
  const {onChangeValue} = props;
  const {iconColor, textHintColor} = useSelector(
    (state: RootStore) => state.theme.colors,
  );
  const {control, handleSubmit, errors, setError} = useForm({
    defaultValues: {password: ''},
  });

  return (
    <InnerNeomorphContainer style={styles.container}>
      {/* <View style={styles.content}>
        <AppIcon
          color={iconColor}
          name="search"
          type={IconType.evilIcons}
          size={24}
        /> */}
      <Controller
        name="password"
        control={control}
        render={(props) => (
          <AppInput
            onBlur={props.onBlur}
            value={props.value}
            onChangeText={(text) => {
              props.onChange(text);
              onChangeValue(text);
            }}
            containerStyle={styles.input}
            placeholder={I18n.t('search')}
          />
        )}
      />
      {/* </View> */}
    </InnerNeomorphContainer>
  );
};
