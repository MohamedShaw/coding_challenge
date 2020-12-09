/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {login as loginAction} from 'slices';
import {LoginForm, RickMortyCard, HomeSearchInput, EmptyList} from 'components';
import {NetworkError} from 'models';
import {AppNavigation} from 'navigation';
import i18n from 'react-native-i18n';
import {showError, AppList, AppSpinner, AppText} from 'common';
import {useCharacters} from 'apollo/hooks/getCharachters';
import {View, StyleSheet} from 'react-native';
interface Props {}

export const ListHOC: React.FC<Props> = () => {
  const page = React.useRef(1);
  const [searchWithName, setSearch] = useState('');
  const {loading, data, error, loadMore, onRefresh} = useCharacters(
    page,
    searchWithName,
  );

  useEffect(() => {
    if (error instanceof NetworkError) {
      showError(i18n.t('network_error'));
    }
  }, [error]);
  let dataToList = data;

  let timeOutId = null;
  const debaounceSearch = (text) => {
    if (timeOutId) {
      clearTimeout(timeOutId);
    }
    timeOutId = null;
    timeOutId = setTimeout(() => {
      setSearch(text);
    }, 1000);
  };

  return (
    <>
      <HomeSearchInput onChangeValue={(text) => debaounceSearch(text)} />
      <AppList
        data={dataToList}
        renderItem={({item}) => {
          return <RickMortyCard {...item} />;
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
  },
});
