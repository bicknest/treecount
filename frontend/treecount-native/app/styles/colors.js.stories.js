import React from 'react';

import {Text, ScrollView, View} from 'react-native';
import {storiesOf} from '@storybook/react';

// Colors

import * as colorPalette from './colors';

const ColorBox = ({name, color}) => (
  <View style={{flex: 1, minHeight: 50, backgroundColor: color}}>
    <Text>{name}</Text>
  </View>
);

storiesOf('palette', module).add('Color Palette: app/styles/colors', () => (
  <ScrollView style={{flex: 1}}>
    {Object.keys(colorPalette).map(key => (
      <ColorBox name={key} key={key} color={colorPalette[key]} />
    ))}
  </ScrollView>
));
