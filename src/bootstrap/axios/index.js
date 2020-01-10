
import axios from 'axios';
import { getToken, setToken, decodeJwt } from './helpers';

const { BASE_URL } = process.env

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json'
  }
});

axiosInstance.interceptors.request.use(async (config) => {
  try {
    const jwt = await getToken();
    if (!jwt) { // Do not bother with token refresh for unauthenticated requests
      return config;
    }

    const {
      exp,
      idToken,
      tokenType,
      email,
      refreshToken
    } = jwt;
    if (!exp) {
      console.warn('Fatal error refreshing token');
      throw new Error('Incomplete JWT information for token refresh');
    }

    console.log('token expires', new Date(exp * 1000));
    if (exp * 1000 <= Date.now()) {
      console.warn('Token expired - refreshing');
      const response = await axios.post(`${BASE_URL}/refreshtoken`, { email, refreshToken });
      if (!response.data) {
        throw new Error('Network error while refreshing user token');
      } else {
        try {
          config.headers.Authorization = `${tokenType} ${response.data.idToken}`;
          await setToken({ ...jwt, ...response.data });
        } catch (error) {
          console.log('Error setting token in axios instance token refresh', error);
          throw error;
        }
      }
    } else {
      config.headers.Authorization = `${tokenType} ${idToken}`;
    }
    return config;
  } catch (error) {
    throw new Error('Logic error while refreshing user token', error);
  }
}, (error) => {
  console.warn('Error in interceptor', error);
  return Promise.reject(error);
});

export default axiosInstance;
export {
  getToken,
  setToken,
  decodeJwt
}