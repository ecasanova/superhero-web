import React, {PureComponent} from 'react';
import {Switch, Route} from 'react-router-dom';

// screens
import EnterScreen from '@/screens/unauthenticated/EnterScreen';
import HomepageScreen from '@/screens/unauthenticated/HomepageScreen';
import DetailScreen from '@/screens/unauthenticated/DetailScreen';
import MyteamScreen from '@/screens/unauthenticated/MyteamScreen';

class Layout extends PureComponent {
  // avoid putting too much functionality in Layout, Any component included here should be self contained to avoid re-renders of significant parts of the site.
  // A good use for this component would be to include a navbar/sidebar. Anything that you want present on every screen.
  render() {
    return (
      <>
        <main>
          <Switch>
            <Route path="/" exact component={EnterScreen} />
            <Route path="/home" component={HomepageScreen} />
            <Route path="/detail" component={DetailScreen} />
            <Route path="/my-team" component={MyteamScreen} />
          </Switch>
        </main>
      </>
    );
  }
}

export default Layout;
