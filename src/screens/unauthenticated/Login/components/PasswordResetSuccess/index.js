import React from 'react'

import '../../login.scss'

export const PasswordResetSuccess = React.memo(({ style }) => {
  return (
    <div style={style}>
      <p id='password-reset-confirmation-text'>An email with instructions on how to update your password has been sent to your inbox</p>
    </div>
  )
})