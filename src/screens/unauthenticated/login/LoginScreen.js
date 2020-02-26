import React, { PureComponent } from 'react'
import i18next from 'i18next'

import LoginForm from '@/features/authentication/components/LoginForm'
import loginLocales from './locales/login.json'
import './loginScreen.scss'

class LoginScreen extends PureComponent {
  constructor (props) {
    super(props)
    i18next.addResourceBundle('en', 'login', loginLocales.login )
  }

  render () {
    return (
      <div className='c-login'>
        <LoginForm />
      </div>
    )
  }
}

export default LoginScreen