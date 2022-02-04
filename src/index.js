import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';

import {Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {ConnectedRouter} from 'connected-react-router';

import store, {persistor, history} from '@/bootstrap/redux';
import Layout from '@/shared/components/Layout';
import Loading from '@/shared/components/Loading';

import './utils/iota/reset.scss';
import './shared/styles/app.scss';

const NODE = 'root';

ReactDOM.render(
  <Suspense fallback={<Loading />}>
    <Provider store={store}>
      <PersistGate loading={<div>loading!</div>} persistor={persistor}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route component={Layout} />
          </Switch>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  </Suspense>,
  document.getElementById(NODE),
);
