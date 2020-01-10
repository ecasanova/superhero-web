import produce from 'immer';
import {
  LOGOUT,
  LOGIN_BEGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  UPDATE_EMAIL,
  UPDATE_PIN,
  TOGGLE_REMEMBER_ME,
  JWT_REFRESHED_SUCCESS,
  SAVE_USER_ONBOARDING,
  PATCH_USER_BEGIN,
  PATCH_USER_SUCCESS,
  PATCH_USER_ERROR
} from './sessionTypes';
import { returnApplicationInfo } from '../helpers';

const applicationInitialState = returnApplicationInfo();

export const INITIAL_STATE = {
  jwt: null,
  authenticated: false,
  meta: {
    loading: false,
    resetPasswordPin: '',
    rememberMe: false,
    userWasPreviouslyOnboarded: false
  },
  application: applicationInitialState,
  user: {
    email: ''
  },
  __persisted_at: null
};

export default produce((draft, action) => {
  switch (action.type) {
    case UPDATE_EMAIL:
      draft.user.email = action.payload;
      return draft;
    case SAVE_USER_ONBOARDING:
      draft.user.onboardingComplete = action.payload;
      return draft;
    case TOGGLE_REMEMBER_ME:
      draft.meta.rememberMe = !draft.meta.rememberMe;
      return draft;
    case UPDATE_PIN:
      draft.meta.resetPasswordPin = action.payload;
      return draft;
    case LOGIN_BEGIN:
      draft.meta.loading = true;
      return draft;
    case LOGIN_SUCCESS:
      const { onboardingComplete } = action.payload.user;
      action.payload.user.onboardingComplete = onboardingComplete ? onboardingComplete.toUpperCase() === 'TRUE' : false;
      draft.meta.userWasPreviouslyOnboarded = action.payload.user.onboardingComplete;
      draft.__persisted_at = !action.payload.rememberMe ? Date.now() : null
      draft.meta.loading = false;
      draft.authenticated = true;
      draft.meta.rememberMe = action.payload.rememberMe;
      draft.jwt = action.payload.jwt;
      draft.user = action.payload.user;
      return draft;
    case LOGIN_FAIL:
      draft.meta.loading = false;
      return draft;
    case PATCH_USER_BEGIN:
      draft.user = {
        ...draft.user,
        ...action.payload
      };
      return draft;
    case PATCH_USER_SUCCESS:
      draft.jwt = action.payload.jwt;
      return draft;
    case PATCH_USER_ERROR:
      draft.user = action.meta.user;
      return draft;
    case JWT_REFRESHED_SUCCESS:
      draft.jwt.accessToken = action.payload.accessToken;
      draft.jwt.idToken = action.payload.idToken;
      draft.user = action.payload.user;
      return draft;
    case LOGOUT:
      return {
        ...INITIAL_STATE,
        meta: {
          ...INITIAL_STATE.meta,
          rememberMe: draft.meta.rememberMe
        },
        user: {
          ...INITIAL_STATE.user,
          email: draft.meta.rememberMe ? draft.user.email : INITIAL_STATE.user.email
        }
      };
  }
}, INITIAL_STATE);
