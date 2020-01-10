import jwtDecode from 'jwt-decode';

export const decodeJwt = jwt => jwtDecode(jwt);
