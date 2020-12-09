import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import { cache } from './cache';
import { HandleErrorLink } from './error';
import i18n from 'react-native-i18n';
import { GRAPHQL_ENDPOINT } from 'utils/urls.json'
import { rootStore } from 'store';

const uploadLink = createUploadLink({ uri: GRAPHQL_ENDPOINT, credentials: rootStore.getState().auth.accessToken });

export const apolloClient = new ApolloClient({
  cache: cache,
  link: ApolloLink.from([HandleErrorLink, uploadLink]),
  headers: {
    'accept-language': i18n.locale,
    // authorization: localStorage.getItem('token') || '',
    // 'client-name': 'ac3-todos-backend',
    // 'client-version': '1.0.0',
  },
  connectToDevTools: true,
});
