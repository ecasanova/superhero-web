import thunk from 'redux-thunk'
import immutableStateInvariantMiddleware from 'redux-immutable-state-invariant'

export const reduxMiddleware = [thunk, immutableStateInvariantMiddleware()]