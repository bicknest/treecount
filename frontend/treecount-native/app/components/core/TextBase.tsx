import {Text} from 'react-native';
import * as React from 'react';

import {
  contentPrimaryColor0,
  contentSubtleColor0,
  highlightPositiveColor,
} from '../../styles/colors';

const colorMap = {
  primary: contentPrimaryColor0,
  subtle: contentSubtleColor0,
  positive: highlightPositiveColor,
};

type Props = {
    style: object,
    flavor: string,
    allowFontScaling: boolean,
};

export default class TextBase extends React.Component<Props> {
  render() {
    const {
      style = {},
      children,
      flavor = 'primary',
      allowFontScaling = false,
      ...props
    } = this.props;
    return (
        <Text
            allowFontScaling={allowFontScaling}
            style={[{color: colorMap[flavor]}, style]}
            {...props}
        >
        {children}
        </Text>
    );
  }
}
