import { SESSION_INITIAL_STATE } from 'features/session/redux'

export function handleStateMigration(state) {
  if (!state || !state.session) return Promise.reject(state)
  if (!state.session.authenticated) {
    return Promise.resolve({
      ...state,
      session: SESSION_INITIAL_STATE
    })
  } else {
    return Promise.resolve(state)
  }
}