import {Dimensions} from 'react-native';
import {connect} from 'react-redux';
import React, {Component} from 'react';
import {createSelector} from 'reselect';
import NavigationExperimental from 'react-native-navigation-experimental-compat';
import naviagtor from '../navigator';
import Auth from './Auth/Auth';
import Home from './Home/Home';
import Profile from './Profile/Profile';

const {CardStack: NavigationCardStack} = NavigationExperimental;

function _transformRoute(route) {
  const {id, key, ...newRoute} = route;
  newRoute.key = key || id;
  return newRoute;
}

const mapStateToProps = createSelector(
  [s => s.cardNavigation],
  navigation => ({navigation})
);

class Navigator extends Component {
  constructor(props) {
    super(props);
    this._dimensions = Dimensions.get('window');
    this.navigator = {
      pop: this._pop,
      push: this._push,
      reset: this._reset,
      resetTo: this._resetTo,
      replace: this._replace,
    };
  }

  _pop = () => this.props.pop();

  // why?
  _push = route => this.props.push(_transformRoute(route));
  render() {
    const {
      navigation: {index, routes},
    } = this.props;

    containers = {
      Auth,
      Home,
      Profile,
    };

    preAuthContainers = new Set(['Auth']);

    return (
      <NavigationCardStack
        navigationState={this.props.navigation}
        renderScene={this._renderScene}
        enabledGestures={false}
      />
    );
  }
}

export default connect(mapStateToProps)(Navigator);
