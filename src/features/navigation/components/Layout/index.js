import React, {PureComponent} from 'react';
import {Switch, Route} from 'react-router-dom';

// screens
import EnterScreen from '@/screens/unauthenticated/EnterScreen';

class Layout extends PureComponent {
  // avoid putting too much functionality in Layout, Any component included here should be self contained to avoid re-renders of significant parts of the site.
  // A good use for this component would be to include a navbar/sidebar. Anything that you want present on every screen.
  render() {
    return (
      <>
        <main>
          <Switch>
            <Route component={EnterScreen} />
          </Switch>
        </main>
      </>
    );
  }
}

export default Layout;
