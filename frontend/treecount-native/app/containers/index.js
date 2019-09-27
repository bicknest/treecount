import {AppState, View, YellowBox} from 'react-native';
import {Provider} from 'react-redux';
import React, {Component} from 'react';
import configureStore from '../store/configureStore';
import Navigator from './navigator';

YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Moduel RCTImageLoader',
]);

export default class Index extends Component {
  render() {
    const store = configureStore();
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <Provider store={store}>
          <Navigator />
        </Provider>
      </View>
    );
  }
}
