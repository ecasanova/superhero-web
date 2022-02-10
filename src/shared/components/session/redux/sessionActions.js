import { createCustomAction } from '@/utils/reduxToolkit/helpers'
import { push } from 'connected-react-router'
import * as types from './sessionTypes'

const getAuthenticationBegin = createCustomAction(types.GET_AUTHENTICATION_BEGIN)
const getAuthenticationSuccess = createCustomAction(types.GET_AUTHENTICATION_SUCCESS)
const getAuthenticationFail = createCustomAction(types.GET_AUTHENTICATION_FAIL)

export const getAuthenticationStatus = (email, password) => async (dispatch) => {
  dispatch(getAuthenticationBegin())
  try {
    // Do an API call here.
    setTimeout(() => {
      const data = { status: 200, data: 'It worked!' }
      dispatch(getAuthenticationSuccess(data))
      dispatch(push('/home'))
    }, 1000)
  } catch (error) {
    console.warn(error)
    dispatch(getAuthenticationFail(error, null, true))
  }
}