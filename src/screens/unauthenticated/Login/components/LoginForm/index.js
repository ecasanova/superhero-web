import React from 'react'
import { TextInput, RadioButton, User, Password } from 'shared/components';
import { Button } from 'antd';
import { colors } from 'shared/styles';

import '../../login.scss'

export const LoginForm = React.memo(({
  email,
  loading,
  rememberMe,
  errors,
  password,
  style,
  handleInputChange,
  onSubmit,
  handleForgotPasswordNavigation,
  handleRememberMe
}) => {
  return (
    <form style={style} onSubmit={onSubmit}>
      <TextInput
        error={errors.email}
        value={email}
        icon={<User fill={colors.WHITE} />}
        keyboardType='email-address'
        autoCompleteType='email'
        textContentType='email'
        autoComplete='email'
        onChange={text => handleInputChange('email', text)}
        placeholder='Email'
      />
      <TextInput
        error={errors.password}
        value={password}
        icon={<Password fill={colors.WHITE} />}
        type='password'
        autoCompleteType='password'
        textContentType='password'
        autoComplete='current-password'
        onChange={text => handleInputChange('password', text)}
        placeholder='Password'
        secureTextEntry
      />
      <RadioButton label='Remember me' onChange={handleRememberMe} value={rememberMe} />
      <Button loading={loading} onClick={onSubmit} type='submit'>Login</Button>
      <p onClick={handleForgotPasswordNavigation} className='login-reset-password-text'>Forgot password?</p>
    </form>
  )
})