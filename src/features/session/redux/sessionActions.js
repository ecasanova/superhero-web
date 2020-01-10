import {
  RESET_REDUX_STATE,
  LOGIN_BEGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  UPDATE_EMAIL,
  UPDATE_PIN,
  TOGGLE_REMEMBER_ME,
  PATCH_USER_BEGIN,
  PATCH_USER_SUCCESS,
  PATCH_USER_ERROR,
  SAVE_USER_ONBOARDING
} from './sessionTypes';

export const updateEmail = email => ({
  type: UPDATE_EMAIL,
  payload: email
});

export const toggleRememberMe = () => ({
  type: TOGGLE_REMEMBER_ME
});

export const updatePin = pin => ({
  type: UPDATE_PIN,
  payload: pin
});

export const loginBegin = () => ({
  type: LOGIN_BEGIN
});

export const loginSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload
});

export const loginFail = error => ({
  type: LOGIN_FAIL,
  error: true,
  payload: error
});

export const resetReduxState = () => ({
  type: RESET_REDUX_STATE
});

export const patchUserBegin = user => ({
  type: PATCH_USER_BEGIN,
  payload: user
});

export const patchUserSuccess = user => ({
  type: PATCH_USER_SUCCESS,
  payload: user
});

export const patchUserError = (error, user) => ({
  type: PATCH_USER_ERROR,
  payload: error,
  error: true,
  meta: {
    user
  }
});

export const saveUserOnboarding = ({ onboarded }) => ({
  type: SAVE_USER_ONBOARDING,
  payload: onboarded
});
