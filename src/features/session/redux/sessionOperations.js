import decode from 'jwt-decode';
import axios from 'axios';
import {
  loginBegin,
  loginSuccess,
  loginFail,
  patchUserBegin,
  patchUserSuccess,
  patchUserError
} from './sessionActions';
import axiosInstance, { getToken, setToken } from 'bootstrap/axios';
import { LOGIN_URL } from '../network/constants';
import { transformLoginResponse } from '../network/transforms';
import { patchUserRequest } from '../network/requests';
import { BASE_URL } from '../../session/network/constants';
import { purgeState } from '../helpers/purgeState';
import { LOGOUT } from './sessionTypes';

export const login = ({
  email, password, rememberMe, isPatient
}) => dispatch => new Promise((resolve, reject) => {
  dispatch(loginBegin());
  axiosInstance.post(LOGIN_URL, {
    email: email.toLowerCase(),
    password,
    isPatient
  }, { headers: { 'Content-Type': 'application/json' } })
    .then((response) => {
      const data = transformLoginResponse(response.data);
      setToken(data.jwt);
      dispatch(loginSuccess({
        ...data,
        rememberMe
      }));
      resolve({
        ...data,
        rememberMe
      });
    }).catch((error) => {
      if (error.response) {
        dispatch(loginFail());
        reject(error);
      } else {
        reject(error);
        console.error('fatal error with login!', error);
      }
    });
});

export const refreshToken = (email, password) => new Promise(async (resolve, reject) => {
  try {
    const store = window ? window.store : global.store;
    const storedTokens = await getToken();
    if (!storedTokens) {
      console.warn('No refresh token stored. Refresh failed.');
      // TODO: clear state and go to login
      reject(new Error('No refresh token stored. Refresh failed.'));
    }
    const profile = decode(storedTokens.idToken);
    const { email } = profile;
    const { refreshToken } = storedTokens;
    const refreshResponse = await axios.post(`${BASE_URL}/refreshtoken`, {
      email,
      refreshToken
    });
    // store.dispatch({
    //   type: 'JWT_REFRESHED_SUCCESS',
    //   payload: {
    //     user: transformLoginResponse(refreshResponse.data).user,
    //     accessToken: refreshResponse.accessToken,
    //     idToken: refreshResponse.idToken
    //   }
    // })
    resolve(refreshResponse.data);
  } catch (error) {
    // TODO: clear state and go to login
    reject(error);
    console.log('error with token refresh', error);
  }
});


export const patchUser = (payload, updateUser = true) => (dispatch, getState) => new Promise((resolve, reject) => {
  const {
    session: {
      user,
      jwt
    }
  } = getState();
  if (updateUser) {
    dispatch(patchUserBegin(payload));
  }
  patchUserRequest(payload)
    .then(async () => {
      await axios.post(`${BASE_URL}/refreshtoken`, {
        email: jwt.email,
        refreshToken: jwt.refreshToken
      }).then(async ({ data }) => {
        const newUser = transformLoginResponse({
          ...jwt, // overwrite old 'jwt' redux state with new jwt 'data'
          ...data
        });
        if (updateUser) {
          await setToken(newUser.jwt);
          dispatch(patchUserSuccess(newUser));
        }
        resolve(newUser);
      }).catch((error) => {
        console.warn('error patching profile', error);
        if (updateUser) {
          dispatch(patchUserError(error, user));
        }
      });
    }).catch((error) => {
      console.warn('error patching profile', error);
      if (updateUser) {
        dispatch(patchUserError(error, user));
      }
      reject(error);
    });
});

export const logout = () => (dispatch) => {
  // let payload = {}
  // payload.notificationtoken = null
  // dispatch(patchUser(payload, false))
  // .then((user) => {
  //   console.log("Unregistered push notification from Form Health servers. New value:", user)
  // }).catch(error => {
  //   console.warn("Unable to unregister push token from Form Health servers", error)
  // })
  dispatch({ type: LOGOUT });
  purgeState();
};
