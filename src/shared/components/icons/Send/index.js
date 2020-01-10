import React from 'react';
import { colors } from 'shared/styles';

export const Send = ({ fill = colors.INACTIVE, active, size = 48 }) => (
  <svg viewBox='0 0 24 24' width={`${size}`} height={`${size}`} fill={fill} style={{ cursor: active ? 'pointer' : 'default' }}>
    <path d='M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M14.586,12L13,10.414V16c0,0.552-0.448,1-1,1h0 c-0.552,0-1-0.448-1-1v-5.586L9.414,12C9.024,12.39,8.39,12.39,8,12l0,0c-0.39-0.39-0.39-1.024,0-1.414l3.293-3.293 c0.39-0.39,1.024-0.39,1.414,0L16,10.586c0.39,0.39,0.39,1.024,0,1.414l0,0C15.61,12.39,14.976,12.39,14.586,12z' />
  </svg>
);
