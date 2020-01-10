import React from 'react'
import { Link } from "react-router-dom";
import { LOGIN_PATH_NAME } from 'shared/constants';
import { colors } from 'shared/styles';
import { TextInput, Password } from 'shared/components';
import { Button } from 'antd';

import '../../login.scss'

export const PasswordResetComplete = React.memo(({
  onPasswordResetComplete,
  handleInputChange,
  loading,
  password,
  errors,
  style
}) => {
  return (
    <form style={{ ...style, justifyContent: 'space-between' }} onSubmit={onPasswordResetComplete}>
      <TextInput
        icon={<Password fill={colors.WHITE} />}
        onChange={text => handleInputChange('password', text)}
        value={password}
        error={errors.password}
        type='password'
        placeholder='New password'
      />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Button
          color='secondary'
          type='submit'
          loading={loading}
          onClick={onPasswordResetComplete}
        >
          UPDATE MY PASSWORD
        </Button>
        <Link className='login-reset-password-text' to={LOGIN_PATH_NAME}>Back to login</Link>
      </div>
    </form>
  )
})