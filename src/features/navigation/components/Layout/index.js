import React, { PureComponent } from 'react'
import { Switch } from 'react-router-dom'
import ProtectedRoute from '../ProtectedRoute'

// screens
import HomeScreen from '@/screens/authenticated/home/HomeScreen'

class Layout extends PureComponent {
  // avoid putting too much functionality in Layout, Any component included here should be self contained to avoid re-renders of significant parts of the site.
  // A good use for this component would be to include a navbar/sidebar. Anything that you want present on every screen.
  render () {
    return (
      <div>
        <main>
          <Switch>
            <ProtectedRoute component={HomeScreen} />
          </Switch>
        </main>
      </div>
    )
  }
}

export default Layout