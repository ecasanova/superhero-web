import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
// eslint-disable-next-line no-unused-vars
import i18n from '@/utils/i18next' // Used to init i18n
import { Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from "redux-persist/integration/react";
import { ConnectedRouter } from 'connected-react-router'

import store, { persistor, history } from '@/bootstrap/redux'

import ProtectedRoute from '@/features/navigation/components/ProtectedRoute'
import LoginScreen from '@/screens/unauthenticated/login/LoginScreen'
import Layout from '@/features/navigation/components/Layout'

import './utils/iota/reset.scss'

const NODE = 'root'

const TranslationsLoadingElement = () => (
  <div>
    <p>I18n translations are loading.</p>
    <p>Please change this loading indicator to match your app!</p>
  </div>
)

ReactDOM.render(
  <Suspense fallback={TranslationsLoadingElement()}>
    <Provider store={store}>
      <PersistGate loading={<div>loading!</div>} persistor={persistor}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path={'/login'} component={LoginScreen} />
            <ProtectedRoute path={'/'} component={Layout} />
          </Switch>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  </Suspense>,
  document.getElementById(NODE)
)
