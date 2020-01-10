import React from 'react';
import { colors } from 'shared/styles';

export const CloseX = React.memo(({
  fill = colors.BLACK,
  size = 30,
  style = {},
  onPress = () => {}
}) => (
  <svg
    onPress={onPress}
    style={style}
    fill={fill}
    width={`${size}px`}
    height={`${size}px`}
    viewBox='0 0 50 50'
  >
    <path d='M 14.40625 13 L 13 14.40625 L 23.625 25 L 13 35.59375 L 14.40625 37 L 25.0625 26.40625 L 35.6875 37 L 37.09375 35.59375 L 26.46875 25 L 37.09375 14.40625 L 35.6875 13 L 25.0625 23.59375 Z' />
  </svg>
));
