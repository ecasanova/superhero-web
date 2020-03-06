import React, { memo } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const ProtectedRoute = ({ component: Component, authenticated, ...rest }) => {
  return (
    <Route {...rest} render={(props) => (
      authenticated
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  )
}

const mapStateToProps = ({ session }) => {
  const { authenticated } = session
  return { authenticated }
}


export default memo(connect(mapStateToProps)(ProtectedRoute))