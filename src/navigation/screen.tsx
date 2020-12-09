import React from 'react';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {Navigation, NavigationFunctionComponent} from 'react-native-navigation';
import {Provider} from 'react-redux';
import {rootStore} from 'store';
import {ApolloProvider} from '@apollo/client';
import {apolloClient} from 'apollo';

export interface Screen {
  name: string;
  component: NavigationFunctionComponent<any>;
  contextProvider?: React.FC;
}

// create Screen
export const createScreen = (screen: Screen) => {
  const {name, component: Component, contextProvider: ContextProvider} = screen;

  let ScreenWraper: NavigationFunctionComponent;

  if (ContextProvider) {
    ScreenWraper = (props) => (
      <ContextProvider>
        <Component {...props} />
      </ContextProvider>
    );
  } else {
    ScreenWraper = (props) => <Component {...props} />;
  }

  Navigation.registerComponent(name, () =>
    gestureHandlerRootHOC((props) => (
      <ApolloProvider client={apolloClient}>
        <Provider store={rootStore}>
          <ScreenWraper {...props} />
        </Provider>
      </ApolloProvider>
    )),
  );
};
