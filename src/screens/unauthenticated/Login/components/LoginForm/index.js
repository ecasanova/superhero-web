import React from 'react'
import { Button, Checkbox } from 'antd'
import { Form, Icon, Input } from 'antd'

import './loginform.scss'

class LoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }

  render() {
    const {
      email,
      loading,
      rememberMe,
      errors,
      password,
      style,
      handleInputChange,
      onSubmit,
      handleForgotPasswordNavigation,
      handleRememberMe,
      form: {
        getFieldDecorator
      }
    } = this.props

    return (
      <Form onSubmit={this.handleSubmit} className='login-form'>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your email!' }]
          })(
            <Input
              prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder='Email'
              onChange={(e) => handleInputChange('email', e.target.value)}
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
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder='Password'
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'rememberMe',
            initialValue: rememberMe
          })(<Checkbox
            onChange={handleRememberMe}
            value={rememberMe}
          ><span className='login-form-remember-me'>Remember me</span></Checkbox>)}
          <a className='login-form-forgot' href=''>
            Forgot password
          </a>
          <Button
            type='primary'
            htmlType='submit'
            loading={loading}
            className='login-form-button'>
            Log in
          </Button>
          <p className='login-form-register-text'>Or <a href=''>register now!</a></p>
        </Form.Item>
        {/* <TextInput
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
      <p onClick={handleForgotPasswordNavigation} className='login-reset-password-text'>Forgot password?</p> */}
      </Form>
    )
  }
}

LoginForm = Form.create({ name: 'horizontal_login' })(LoginForm)
export {
  LoginForm
}