import React from 'react';
import { colors } from 'shared/styles';

export const Mic = React.memo(({
  fill = colors.WHITE, size = 58, active = false, onClick = () => {}
}) => {
  if (active) {
    return (
      <svg onClick={onClick} width={`${size}px`} height={`${size}px`} viewBox='0 0 58 58' style={{ cursor: 'pointer' }}>
        <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
          <g transform='translate(-1772.000000, -407.000000)'>
            <g transform='translate(1773.000000, 408.000000)'>
              <circle stroke={fill} strokeWidth='2' cx='28' cy='28' r='28' />
              <g transform='translate(19.000000, 12.000000)'>
                <path d='M9.5,0 C7.25141209,0 5.42857143,1.82284066 5.42857143,4.07142857 L5.42857143,14.9285714 C5.42857143,17.1771593 7.25141209,19 9.5,19 C11.7485879,19 13.5714286,17.1771593 13.5714286,14.9285714 L13.5714286,4.07142857 C13.5714286,1.82284066 11.7485879,0 9.5,0 Z' fill={fill} />
                <path d='M19,12.2142857 L19,14.9285714 C19,20.1752765 14.7467051,24.4285713 9.5,24.4285713 C4.25329493,24.4285713 -1.77635684e-15,20.1752765 -1.77635684e-15,14.9285714 L-1.77635684e-15,12.2142857' stroke={fill} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                <path d='M9.5,24.4285714 L9.5,29.8571429' stroke={fill} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                <path d='M4.07142857,29.8571429 L14.9285714,29.8571429' stroke={fill} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
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
        <g transform='translate(-1772.000000, -407.000000)'>
          <g transform='translate(1773.000000, 408.000000)'>
            <circle fill='#BFBFBF' stroke={fill} strokeWidth='2' cx='28' cy='28' r='28' />
            <g transform='translate(19.000000, 12.000000)'>
              <path d='M9.5,0 C7.25141209,0 5.42857143,1.82284066 5.42857143,4.07142857 L5.42857143,14.9285714 C5.42857143,17.1771593 7.25141209,19 9.5,19 C11.7485879,19 13.5714286,17.1771593 13.5714286,14.9285714 L13.5714286,4.07142857 C13.5714286,1.82284066 11.7485879,0 9.5,0 Z' fill={fill} />
              <path d='M19,12.2142857 L19,14.9285714 C19,20.1752765 14.7467051,24.4285713 9.5,24.4285713 C4.25329493,24.4285713 -1.77635684e-15,20.1752765 -1.77635684e-15,14.9285714 L-1.77635684e-15,12.2142857' stroke={fill} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
              <path d='M9.5,24.4285714 L9.5,29.8571429' stroke={fill} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
              <path d='M4.07142857,29.8571429 L14.9285714,29.8571429' stroke={fill} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
            </g>
            <path d='M47.3018999,8.5 L9,47.7839999' stroke={fill} strokeWidth='3' strokeLinecap='square' />
          </g>
        </g>
      </g>
    </svg>
  );
});
