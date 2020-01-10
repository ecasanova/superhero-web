import axiosInstance from 'bootstrap/axios';
import { FORGOT_PASSWORD_URL, CONFIRM_PASSWORD_URL } from './constants';

export const resetPasswordInit = ({ email }) => new Promise((resolve, reject) => {
  axiosInstance.post(FORGOT_PASSWORD_URL, { email }, { headers: { 'Content-Type': 'application/json' } })
    .then(resolve)
    .catch(reject);
});

export const resetPasswordComplete = ({ email, password, resetPasswordPin }) => new Promise((resolve, reject) => {
  axiosInstance.post(CONFIRM_PASSWORD_URL, {
    email,
    pin: resetPasswordPin,
    newpassword: password
  }, { headers: { 'Content-Type': 'application/json' } }).then((response) => {
    resolve(response);
  }).catch((error) => {
    reject(error);
  });
});
