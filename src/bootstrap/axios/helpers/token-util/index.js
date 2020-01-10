import { decodeJwt } from '../decode-jwt';

export const getToken = () => {
  try {
    const token = window.localStorage.getItem('token');
    if (token) {
      return (JSON.parse(token));
    } else {
      console.warn("No token found")
      return (null);
    }
  } catch (error) {
    console.warn('Unable to get token', error);
    return (null);
  }
}

export const setToken = (token) => {
  const decodedJwt = decodeJwt(token.idToken);
  const jwtMetadata = {
    ...token,
    ...decodedJwt
  };
  try {
    window.localStorage.setItem('token', JSON.stringify(jwtMetadata));
    return (jwtMetadata);
  } catch (error) {
    console.warn('Unable to set token', error);
    return (error);
  }
};
