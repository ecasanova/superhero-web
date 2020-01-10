import React from 'react';
import { colors } from 'shared/styles';

export const Share = ({
  fill = colors.WHITE, size = 64, style = {}, onClick = () => {}
}) => (
  <svg
    onClick={onClick}
    fill={fill}
    style={style}
    viewBox='0 0 32 32'
    width={`${size}px`}
    height={`${size}px`}
  >
    <path d='M 16 2.5859375 L 11.292969 7.2929688 L 12.707031 8.7070312 L 15 6.4140625 L 15 21 L 17 21 L 17 6.4140625 L 19.292969 8.7070312 L 20.707031 7.2929688 L 16 2.5859375 z M 9 11 C 7.3550302 11 6 12.35503 6 14 L 6 26 C 6 27.64497 7.3550302 29 9 29 L 23 29 C 24.64497 29 26 27.64497 26 26 L 26 14 C 26 12.35503 24.64497 11 23 11 L 20 11 L 20 13 L 23 13 C 23.56503 13 24 13.43497 24 14 L 24 26 C 24 26.56503 23.56503 27 23 27 L 9 27 C 8.4349698 27 8 26.56503 8 26 L 8 14 C 8 13.43497 8.4349698 13 9 13 L 12 13 L 12 11 L 9 11 z' />
  </svg>
);
