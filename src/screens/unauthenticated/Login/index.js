import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { login, toggleRememberMe, updateEmail, updatePin } from 'features/session/redux'
import {
  resetPasswordInit,
  resetPasswordComplete
} from 'features/session/network'
import { withRouter } from "react-router-dom";
import { Transition } from "react-transition-group";
import {
  LoginForm,
  PasswordReset,
  PasswordResetComplete
} from './components';
import { emailPasswordSchema, passwordSchema, emailSchema } from 'utils/validation/loginSchema';
import {
  LOGIN_PATH_NAME,
  PASSWORD_RESET_PATHNAME,
  PASSWORD_RESET_COMPLETE_PATHNAME
} from 'shared/constants';
import { colors } from 'shared/styles'

import './login.scss'

class Login extends PureComponent {
  constructor(props) {
    super(props)
    const { location } = this.props
    this.handleInputChange = this.handleInputChange.bind(this)
    this.currentStage = this.returnCurrentStage(location)
    this.prevStage = this.currentStage
    this.state = {
      loading: false,
      password: '',
      errors: {},
      message: null
    }
  }

  static getDerivedStateFromProps(props) {
    const { email, resetPasswordPin } = props
    return { email, resetPasswordPin }
  }

  handleLogin = event => {
    event.preventDefault()
    const { password, email } = this.state
    const { login, history, rememberMe } = this.props
    this.setState({ loading: true, message: null, errors: {} }, () => {
      emailPasswordSchema.validate({ email, password }, {
        strict: false,
        abortEarly: false,
        recursive: true
      }).then(() => {
        login({ email, password, rememberMe, isPatient: false })
          .then(() => {
            history.push("/")
          })
          .catch(error => {
            this.setState({
              loading: false,
              message: {
                error: true,
                text: error.status
              }
            })
          })
      }).catch(error => {
        if (error.inner) {
          let errors = {}
          error.inner.forEach(field => {
            errors[field.path] = field.errors
          })
          this.setState({
            errors,
            loading: false
          })
        } else {
          console.warn("Uncaught exception", error)
          this.setState({
            loading: false,
            message: {
              error: true,
              text: error.message
            }
          })
        }
      })
    })
  }

  handleForgotPassword = event => {
    const { email } = this.state
    const { history } = this.props
    event.preventDefault()
    this.setState({ loading: true, message: null, errors: {} }, () => {
      emailSchema.validate({ email }, {
        strict: false,
        abortEarly: false,
        recursive: true
      }).then(() => {
        resetPasswordInit({ email })
          .then(() => {
            this.setState({
              message: {
                error: false,
                text: "An email with instructions on how to update your password has been sent to your inbox"
              }
            }, () => {
              this.resetLoadingAfterTimeout()
              history.push(LOGIN_PATH_NAME)
            })
          })
          .catch(error => {
            this.setState({
              loading: false,
              message: {
                error: true,
                text: error.status
              }
            })
          })
      }).catch(error => {
        if (error.inner) {
          let errors = {}
          error.inner.forEach(field => {
            errors[field.path] = field.errors
          })
          this.setState({
            errors,
            loading: false
          })
        } else {
          console.warn("Uncaught exception", error)
          this.setState({
            loading: false,
            message: {
              error: true,
              text: error.message
            }
          })
        }
      })
    })
  }

  handlePasswordResetComplete = event => {
    event.preventDefault()
    const { email, resetPasswordPin, password } = this.state
    const { updateEmail, history } = this.props
    this.setState({ loading: true, message: null, errors: {} }, () => {
      passwordSchema.validate({ email, password }, {
        strict: false,
        abortEarly: false,
        recursive: true
      }).then(() => {
        resetPasswordComplete({ email, password, resetPasswordPin })
          .then(() => {
            updateEmail(email) // ensure redux email state is up to date with email from query
            this.setState({
              password: '',
              message: {
                error: false,
                text: "Password reset successfully"
              }
            }, () => {
              this.resetLoadingAfterTimeout()
              history.push(LOGIN_PATH_NAME)
            })
          })
          .catch(error => {
            this.setState({
              loading: false,
              message: {
                error: true,
                text: error.status
              }
            })
          })
      }).catch(error => {
        if (error.inner) {
          let errors = {}
          error.inner.forEach(field => {
            errors[field.path] = field.errors
          })
          this.setState({
            errors,
            loading: false
          })
        } else {
          console.warn("Uncaught exception", error)
          this.setState({
            loading: false,
            message: {
              error: true,
              text: error.message
            }
          })
        }
      })
    })
  }

  handleInputChange(type, text) {
    const { errors } = this.state
    const { updateEmail } = this.props
    let newErrors = { ...errors }
    delete newErrors[type]
    if (type === 'email') {
      updateEmail(text)
      this.setState({
        message: null,
        errors: newErrors
      })
    } else {
      this.setState({
        message: null,
        errors: newErrors,
        [type]: text
      })
    }
  }

  handleRememberMe = () => {
    const { toggleRememberMe } = this.props
    toggleRememberMe();
  }

  handleForgotPasswordNavigation = () => {
    const { history } = this.props
    history.push(PASSWORD_RESET_PATHNAME)
  }

  // reset loading state (which dictates overall component opacity) after transition has completed
  resetLoadingAfterTimeout = (timeout = duration) => setTimeout(() => this.setState({ loading: false }), timeout)

  returnCurrentStage = location => {
    switch (location.pathname) {
      case LOGIN_PATH_NAME: return 0
      case PASSWORD_RESET_PATHNAME: return 1
      case PASSWORD_RESET_COMPLETE_PATHNAME: return 2
      default: return 0
    }
  }

  render() {
    const { errors, email, password, loading, message } = this.state
    const { location, rememberMe } = this.props
    const { pathname } = location

    this.prevStage = this.currentStage
    this.currentStage = this.returnCurrentStage(location)
    const navigationDirection = this.currentStage >= this.prevStage ? 'forward' : 'backward'

    return (
      <div className='login-form-container'>
        <div className='login-form-outer'>
          <div className='login-form-header-container'>
            <h1 className='login-header-text'>LOG IN</h1>
            {message ? <p
              id='password-reset-confirmation-text'
              style={{
                backgroundColor: message.error ? colors.ALERT : colors.SUCCESS,
                boxShadow: `0 5px 10px ${message.error ? 'rgba(204,75,55, 0.1)' : 'rgba(58,219,118, 0.1)'}`
              }}>{message.text}</p> : null}
          </div>
          <div style={loading ? transitionContainerLoadingStyle : defaultTransitionContainerStyle}>
            <Transition
              in={pathname === LOGIN_PATH_NAME}
              timeout={timeout}
              mountOnEnter
              unmountOnExit
            >
              {state => (
                <LoginForm
                  loading={loading}
                  email={email}
                  rememberMe={rememberMe}
                  handleRememberMe={this.handleRememberMe}
                  password={password}
                  errors={errors}
                  handleInputChange={this.handleInputChange}
                  onSubmit={this.handleLogin}
                  handleForgotPasswordNavigation={this.handleForgotPasswordNavigation}
                  style={transitionStyles[navigationDirection][state]}
                />
              )}
            </Transition>
            <Transition
              in={pathname === PASSWORD_RESET_PATHNAME}
              timeout={timeout}
              mountOnEnter
              unmountOnExit
            >
              {state => (
                <PasswordReset
                  loading={loading}
                  email={email}
                  errors={errors}
                  handleInputChange={this.handleInputChange}
                  onPasswordRequest={this.handleForgotPassword}
                  style={transitionStyles[navigationDirection][state]}
                />
              )}
            </Transition>
            <Transition
              in={pathname === PASSWORD_RESET_COMPLETE_PATHNAME}
              timeout={timeout}
              mountOnEnter
              unmountOnExit
            >
              {state => (
                <PasswordResetComplete
                  loading={loading}
                  errors={errors}
                  password={password}
                  onPasswordResetComplete={this.handlePasswordResetComplete}
                  handleInputChange={this.handleInputChange}
                  style={transitionStyles[navigationDirection][state]}
                />
              )}
            </Transition>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({
  session: {
    user: {
      email
    },
    meta: {
      rememberMe,
      resetPasswordPin
    }
  }
}, ownProps) {
  return {
    rememberMe,
    email: email || ownProps.email || "",
    resetPasswordPin: resetPasswordPin || ownProps.resetPasswordPin || ""
  }
}

export default connect(
  mapStateToProps,
  {
    login,
    updateEmail,
    updatePin,
    toggleRememberMe
  }
)(withRouter(Login));


const defaultTransitionContainerStyle = {
  opacity: 1,
  transition: 'all 0.2s'
}

const transitionContainerLoadingStyle = {
  transition: 'all 0.2s',
  opacity: 0.5,
  pointerEvents: 'none'
}

const duration = 300;

const timeout = {
  appear: duration,
  enter: 0,
  exit: duration
}

const defaultStyle = {
  position: 'absolute',
  width: '100%',
  bottom: 0,
  height: '55%',
  padding: 20,
  transition: `transform ${duration}ms ease-in-out`,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end'
}

const transitionStyles = {
  forward: {
    entering: {
      ...defaultStyle,
      transform: 'translate(100%)'
    },
    entered: {
      ...defaultStyle,
      transform: 'translate(0%)'
    },
    exiting: {
      ...defaultStyle,
      transform: 'translate(-100%)'
    },
    exited: {
      ...defaultStyle,
      transform: 'translate(-100%)'
    }
  },
  backward: {
    entering: {
      ...defaultStyle,
      transform: 'translate(-100%)'
    },
    entered: {
      ...defaultStyle,
      transform: 'translate(0%)'
    },
    exiting: {
      ...defaultStyle,
      transform: 'translate(100%)'
    },
    exited: {
      ...defaultStyle,
      transform: 'translate(100%)'
    }
  }
};
