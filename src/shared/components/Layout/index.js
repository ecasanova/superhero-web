import React, {PureComponent} from 'react';

// screens
import RouteComponent from '../routes';

class Layout extends PureComponent {
  // avoid putting too much functionality in Layout, Any component included here should be self contained to avoid re-renders of significant parts of the site.
  // A good use for this component would be to include a navbar/sidebar. Anything that you want present on every screen.
  render() {
    return (
      <>
        <main>
          <RouteComponent />
        </main>
      </>
    );
  }
}

export default Layout;
