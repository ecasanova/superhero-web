import React from 'react';
import { colors } from 'shared/styles';

export const Video = React.memo(({
  fill = colors.WHITE, size = 58, active = false, onClick = () => {}
}) => {
  if (active) {
    return (
      <svg onClick={onClick} width={`${size}px`} height={`${size}px`} viewBox='0 0 58 58' style={{ cursor: 'pointer' }}>
        <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
          <g transform='translate(-1672.000000, -407.000000)'>
            <g transform='translate(1673.000000, 408.000000)'>
              <g stroke={fill} strokeWidth='2'>
                <circle cx='28' cy='28' r='28' />
              </g>
              <g transform='translate(17.000000, 21.000000)' fill={fill}>
                <polygon points='22 2 15 7 22 12' />
                <rect x='0' y='0' width='15' height='14' rx='2' />
              </g>
            </g>
          </g>
        </g>
      </svg>
    );
  }
  return (
    <svg onClick={onClick} width={`${size}px`} height={`${size}px`} viewBox='0 0 58 58' style={{ cursor: 'pointer' }}>
      <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g transform='translate(-1672.000000, -407.000000)'>
          <g transform='translate(1673.000000, 408.000000)'>
            <g stroke={fill} strokeWidth='2'>
              <circle fill='#BFBFBF' cx='28' cy='28' r='28' />
            </g>
            <g transform='translate(17.000000, 21.000000)' fill={fill}>
              <polygon points='22 2 15 7 22 12' />
              <rect x='0' y='0' width='15' height='14' rx='2' />
            </g>
            <path d='M47.5,8.5 L9.19810006,47.7839999' stroke={fill} strokeWidth='3' strokeLinecap='square' />
          </g>
        </g>
      </g>
    </svg>
  );
});
