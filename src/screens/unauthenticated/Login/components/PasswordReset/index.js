import React from 'react'
import { TextInput, User } from 'shared/components';
import { colors } from 'shared/styles';
import { Button } from 'antd';

import '../../login.scss'

export const PasswordReset = React.memo(({
  email,
  handleInputChange,
  errors,
  style,
  onPasswordRequest,
  loading
}) => {
  return (
    <form
      style={{ ...style, justifyContent: 'space-between' }}
      onSubmit={onPasswordRequest}>
      <TextInput
        icon={<User fill={colors.WHITE} />}
        onChange={text => handleInputChange('email', text)}
        value={email}
        error={errors.email}
        placeholder='Email'
      />
      <Button
        loading={loading}
        onClick={onPasswordRequest}
        type='submit'
      >
        Retrieve My Password
      </Button>
    </form>
  )
})