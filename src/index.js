import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';

import {Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {ConnectedRouter} from 'connected-react-router';

import store, {persistor, history} from './bootstrap/redux/index';
import Loading from '@shared/components/Loading';
import ScrollToTop from '@shared/components/Layout/scrollToTop';
import '@shared/styles/app.scss';

import Routes from '@shared/components/routes';
import routesConfig from '@shared/components/routes/config';

const NODE = 'root';

ReactDOM.render(
  <Suspense fallback={<Loading />}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>
          <ScrollToTop />
          <Switch>
            <Routes store={store} routes={routesConfig} />
          </Switch>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  </Suspense>,
  document.getElementById(NODE),
);
