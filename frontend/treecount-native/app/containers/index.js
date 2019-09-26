import {AppState, View, YellowBox} from 'react-native';
import {Provider} from 'react-redux';
import React, {Component} from 'react';
import NetInfo from '@react-native-community/netinfo';
import main from '../main';
import Navigator from './navigator';

import actions from '../actions';

const {appInit} = actions;

YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Moduel RCTImageLoader',
]);

export default class Index extends Component {
  constructor(props) {
    super(props);
    const {store, needsRehydration} = main({
      onRehydrate: () => {
        this.setState({isVisible: true});
        store.dispatch(appInit());
      },
    });
    this.state = {
      isVisible: !needsRehydration,
      store,
    };
  }

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
    NetInfo.fetch().then(this.handleConnectionChange);
    this.netInfoUnsubscribe = NetInfo.addEventListener(
      this.handleConnectionChange
    );
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
    if (this.netInfoUnsubscribe) {
      this.netInfoUnsubscribe();
    }
  }

  handleAppStateChange = appState => {
    const {store} = this.state;
    store.dispatch({type: APP_STATE_CHANGED, payload: {appState}});
  };

  handleConnectionChange = connectionInfo => {
    const {store} = this.state;
    store.dispatch(updateConnectionInfo(connectionInfo));
  };

  render() {
    const {store, isVisible} = this.state;
    if (!isVisible) {
      return <View />;
    }
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <Provider store={store}>
          <Navigator />
        </Provider>
      </View>
    );
  }
}
