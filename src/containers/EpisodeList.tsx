/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {HomeSearchInEpisodeListput, EmptyList, EpisodeItem} from 'components';
import {NetworkError} from 'models';
import {AppNavigation} from 'navigation';
import i18n from 'react-native-i18n';
import {showError, AppList, AppSpinner, AppText} from 'common';
import {useCharacters} from 'apollo/hooks/getCharachters';
import {View, StyleSheet} from 'react-native';
interface Props {}

export const EpisodeList: React.FC<Props> = () => {
  const {loading, data, error, loadMore, onRefresh} = useCharacters();

  useEffect(() => {
    if (error instanceof NetworkError) {
      showError(i18n.t('network_error'));
    }
  }, [error]);

  return (
    <>
      <AppList
        data={data}
        renderItem={({item}) => {
          return <EpisodeItem {...item} />;
        }}
        onEndReached={loadMore}
        style={{
          alignSelf: 'stretch',
        }}
        ListFooterComponent={loading ? <AppSpinner /> : null}
        ListFooterComponentStyle={styles.spinnerContainer}
        onEndReachedThreshold={0.2}
        refreshing={data?.length !== 0 && loading}
        onRefresh={onRefresh}
        ListEmptyComponent={!loading && data.length === 0 && EmptyList}
      />
    </>
  );
};

const styles = StyleSheet.create({
  spinnerContainer: {
    alignItems: 'center',
    height: 75,
    paddingTop: '15%',
    paddingHorizontal: 7,
  },
});
