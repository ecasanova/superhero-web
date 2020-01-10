import thunk from 'redux-thunk'
import immutableStateInvariantMiddleware from 'redux-immutable-state-invariant'

// const bugsnagBreadcrumbs = store => next => action => {
//   const { type, ...payload } = action
//   // if (!REDUX_ACTIONS_TO_IGNORE.includes(type)) {
//     client.leaveBreadcrumb('REDUX ACTION', {
//       action: type,
//       payload: JSON.stringify(payload).slice(0, 100)
//     })
//   // }
//   next(action)
// }

// export const reduxMiddleware = __DEV__
//   ? [thunk, bugsnagBreadcrumbs, immutableStateInvariantMiddleware()]
//   : [thunk, bugsnagBreadcrumbs]
export const reduxMiddleware = [thunk, /* bugsnagBreadcrumbs,*/ immutableStateInvariantMiddleware()]