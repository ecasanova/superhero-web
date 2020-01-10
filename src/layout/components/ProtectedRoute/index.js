import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

let ProtectedRoute = React.memo(({ component: Component, authenticated, ...rest }) => {
  return (
    <Route {...rest} render={(props) => (
      authenticated
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  )
})

const mapStateToProps = ({
  session: {
    authenticated
  }
}) => {
  return {
    authenticated
  }
}

ProtectedRoute = connect(mapStateToProps)(ProtectedRoute)
export {
  ProtectedRoute
}