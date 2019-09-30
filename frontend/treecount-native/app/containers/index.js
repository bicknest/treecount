// TODO: figure out provider for redux vs. apollo
import {AppState, View, YellowBox} from 'react-native';
import {Provider} from 'react-redux';
import {ApolloProvider} from '@apollo/react-hooks';
import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {createHttpLink} from 'apollo-link-http';
import React, {Component} from 'react';
import configureStore from '../store/configureStore';
import Navigator from './navigator';

YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Moduel RCTImageLoader',
]);

const cache = new InMemoryCache();
const link = createHttpLink({
  uri: 'http://10.0.2.2:8000/',
});

const client = new ApolloClient({
  link,
  cache,
});

export default class Index extends Component {
  render() {
    const store = configureStore();
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <Provider store={store}>
          <ApolloProvider client={client}>
            <Navigator />
          </ApolloProvider>
        </Provider>
      </View>
    );
  }
}
