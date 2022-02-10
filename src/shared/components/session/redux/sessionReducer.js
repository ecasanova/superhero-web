import { createReducer } from '@reduxjs/toolkit'
import * as types from './sessionTypes'

const INITIAL_STATE = {
  authenticated: false,
  meta: {
    loggingIn: false,
    hasError: false
  }
}

export default createReducer(INITIAL_STATE, {
  [types.GET_AUTHENTICATION_BEGIN]: (state, action) => {
    state.meta.loggingIn = true
    state.meta.hasError = false
  },
  [types.GET_AUTHENTICATION_SUCCESS]: (state, action) => {
    state.meta.loggingIn = false
    state.authenticated = true
  },
  [types.GET_AUTHENTICATION_FAIL]: (state, action) => {
    state.meta.loggingIn = false
    state.meta.hasError = true
    state.authenticated = false
  },
  [types.LOG_OUT]: (state, action) => {
    state.authenticated = false
    state.meta = INITIAL_STATE.meta
  }
})