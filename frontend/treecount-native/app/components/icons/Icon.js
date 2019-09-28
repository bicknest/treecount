import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import React, {PureComponent} from 'react';
import {Animated} from 'react-native';

const fontAwesomeIconStyle = {
  fontSize: 32,
  color: '#757575',
};

export default class Icon extends PureComponent {
  render() {
    const {name, size = 24, ...props} = this.props;
    if (name.slice(0, 3) === 'fa-') {
      const {style = {}, ...faProps} = props;
      console.log(faProps);
      const iconName = name.slice(3);
      return (
        <FontAwesomeIcon
          name={iconName}
          style={[fontAwesomeIconStyle, {fontSize: size}, style]}
          {...faProps}
        />
      );
    }
    return <MaterialIcon name={name} size={size} {...props} />;
  }
}

export const AnimatedIcon = Animated.createAnimatedComponent(Icon);
