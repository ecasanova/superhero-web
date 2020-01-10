import React from 'react';
import styled, { css } from 'styled-components';
import { errorMessageStyles } from '../styles';
import { colors } from 'shared/styles';


// login
const StyledInput = styled.input`
  width: 100%;
  background-color: transparent;
  outline: 0;
  border: 0;
  font-size: 16px;
  color: ${colors.WHITE};
  font-family: 'SFProDisplay-Regular';
  
  ${props => props.dark && css`color: ${colors.BLACK};`}
  ::placeholder {
    color: ${colors.WHITE};
    opacity: 1;
  }
`;

const StyledWrapper = styled.div(({ dark, error, containerStyle }) => ({
  width: '100%',
  marginBottom: '10px',
  borderBottom: `1px solid ${dark ? 'rgba(0, 0, 0, 0.25)' : error ? colors.ALERT : colors.WHITE}`,
  ...containerStyle
}));

const StyledErrorMessage = styled.p(errorMessageStyles);

const Input = React.forwardRef(({
  value,
  type,
  placeholder,
  onChange,
  dark,
  autoComplete,
  autoFocus,
  error,
  icon,
  name,
  containerStyle,
  defaultValue,
  webWidth
}, ref) => {
  return (
    <StyledWrapper className='fh-input__wrapper' dark={dark} error={error} containerStyle={containerStyle} width={webWidth}>
      {error && <StyledErrorMessage error={error}>{error}</StyledErrorMessage> }
      <div style={{ display: 'flex' }} className='qq'>
        {icon || null}
        <StyledInput
          className='fh-input__wrapper__inner'
          icon={icon}
          ref={ref}
          error={error}
          value={value}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          onChange={e => onChange(e.target.value)}
          type={type}
          name={name}
          dark={dark}
          placeholder={placeholder}
          defaultValue={defaultValue}
        />
      </div>
    </StyledWrapper>
  );
});

export default Input;
