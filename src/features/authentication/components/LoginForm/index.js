/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import { withTranslation, Trans } from 'react-i18next';

import { getAuthenticationStatus } from '@/features/session/redux/sessionActions'
import './loginForm.scss'

class LoginForm extends PureComponent {
  constructor (props) {
    super (props)
    const { i18n } = this.props
    this.state = {
      isEnglish: i18n.language === 'en' || i18n.language === 'en-US'
    }
  }

  handleChangeLanguage = () => {
    const { i18n } = this.props
    if (this.state.isEnglish) i18n.changeLanguage('es')
    else i18n.changeLanguage('en')
    this.setState((prevState) => ({ isEnglish: !prevState.isEnglish }))
  }

  handleSubmit = e => {
    e.preventDefault()
    const { form, getAuthenticationStatus } = this.props
    form.validateFields((err, values) => {
      if (!err) getAuthenticationStatus(values.username, values.password)
    })
  }

  render () {
    const { loggingIn, t } = this.props
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleSubmit} className='login-form'>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }]
          })(
            <Input
              prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder={t('username')}
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }]
          })(
            <Input
              prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
              type='password'
              placeholder={t('password')}
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true
          })(<Checkbox>{t('remember')}</Checkbox>)}
          <a className='login-form-forgot' href=''>
            {t('forgot')}
          </a>
          <Button disabled={loggingIn} type='primary' htmlType='submit' className='login-form-button'>
            {t('login')}
          </Button>
          <Trans i18nKey='login:register'>
            Or <a href='#'>register now!</a>
          </Trans>
        </Form.Item>
        <Button type='primary' onClick={this.handleChangeLanguage}>Change Language</Button>
      </Form>
    )
  }
}
const mapStateToProps = ({ session }) => {
  const { loggingIn } = session.meta
  return { loggingIn }
}
const WrappedLoginForm = Form.create({ name: 'normal_login' })(LoginForm)
export default withTranslation(['login'])(connect(mapStateToProps, { getAuthenticationStatus })(WrappedLoginForm))