import React from 'react';
import TextBase from './TextBase';

export function makeText(defaultStyle) {
  return function({children, style = {}, props}) {
    return (
      <TextBase style={[defaultStyle, style]} {...props}>
        {children}
      </TextBase>
    );
  };
}
