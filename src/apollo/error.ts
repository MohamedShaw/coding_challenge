import { onError } from '@apollo/client/link/error';
import { showError } from 'common';
import i18n from 'react-native-i18n';


export const HandleErrorLink = onError(({ graphQLErrors, networkError, forward }) => {
  if (graphQLErrors) {
    console.log("apollo", graphQLErrors);

    for (let err of graphQLErrors) {
      switch (err?.extensions?.code) {
        case 'INVALID_FACEBOOK_TOKEN':
          showError(i18n.t('general_error'));
          break;
      }
    }
  }

  if (networkError) {
    // console.log(networkError)
  }
});
