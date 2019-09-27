import {Dimensions} from 'react-native';
import {connect} from 'react-redux';
import React, {Component} from 'react';
import {createSelector} from 'reselect';
import NavigationExperimental from 'react-native-navigation-experimental-compat';
import naviagtor from '../navigator';
import Auth from './Auth/Auth';
import HomeScreen from './Home/HomeScreen';
import ProfileScreen from './Profile/ProfileScreen';

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

  _reset = routes =>
    this.props.reset(routes.map(_transformRoute), routes.length - 1);

  _resetTo = (routeName, params) => this.props.resetTo(routeName, params);

  _replace = route => {
    const {navigation, replaceAt} = this.props;
    const currentKey = navigation.routes[navigation.index || 0].key;
    return replaceAt(currentKey, _transformRoute(route));
  };

  containers = {
    Auth,
    HomeScreen,
    ProfileScreen,
  };

  preAuthContainers = new Set(['Auth']);

  _renderScene = ({scene: {route}}) => {
    const {key, ...routeParams} = route;
    const props = {
      ...routeParams,
      navigationState: this.props.navigation,
      navigator: this.navigator,
    };
    const Container = this.containers[key] || HomeSCreen;
    return <Container {...props} />;
  };

  render() {
    const {
      navigation: {index, routes},
    } = this.props;

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
