import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch, withRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from "connected-react-router"
import { PersistGate } from "redux-persist/integration/react";

import store, { persistor, history } from 'bootstrap/redux'
import bugsnagClient from 'bootstrap/bugsnag'

import { PASSWORD_RESET_COMPLETE_PATHNAME } from 'shared/constants';
import { ProtectedRoute } from 'layout'
import { LoginScreen } from 'screens'

import 'shared/assets/scss/base.scss';
import 'antd/dist/antd.css';

const NODE = 'root'
const ErrorBoundary = bugsnagClient.getPlugin('react')

function handleLoginRoute(location) {
  const { search, pathname } = location
  if (pathname === PASSWORD_RESET_COMPLETE_PATHNAME) {
    const params = new URLSearchParams(search)
    const email = params.get('email')
    const resetPasswordPin = params.get('pin')
    // here we can check pin length, email validity, etc and redirect if query params are invalid
    if (email && resetPasswordPin) { // for now we just check if both are not null
      return <LoginScreen email={email} resetPasswordPin={resetPasswordPin} />
    } else {
      return <LoginScreen />
    }
  }
  return <LoginScreen />
}

class AppRoutes extends React.PureComponent {
  render () {
    const { location } = this.props
    return (
      <Switch>
        <Route exact path='/login' render={() => handleLoginRoute(location)} />
        <Route exact path='/password-reset' render={() => handleLoginRoute(location)} />
        <Route exact path='/resetpw' render={() => handleLoginRoute(location)} />
        <ProtectedRoute path='/' component={() => <div>Home</div>} />
      </Switch>
    )
  }
}

const RoutedAppRoutes = withRouter(AppRoutes)

ReactDOM.render(
  <ErrorBoundary>
    <Provider store={store}>
      <PersistGate loading={<div>loading!</div>} persistor={persistor}>
        <ConnectedRouter history={history}>
          <Switch>
            {<RoutedAppRoutes />}
          </Switch>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  </ErrorBoundary>,
  document.getElementById(NODE)
)
