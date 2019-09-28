import {View, StyleSheet} from 'react-native';
import React from 'react';

import {backgroundDefaultColor} from '../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundDefaultColor,
  },
});

export default function Container({children, style = {}}) {
  return <View style={[styles.container, style]}>{children}</View>;
}
