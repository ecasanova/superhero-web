import React from 'react';
import {Switch, Route, useLocation} from 'react-router-dom';
import routes from './config';
import Header from '@/shared/components/Header';

function RouteComponent() {
  let location = useLocation();
  return (
    <>
      {location.pathname !== '' && location.pathname !== '/' && <Header />}
      <Switch>
        {routes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </Switch>
    </>
  );
}

export default RouteComponent;
