import { forEach } from 'lodash';
import moment from 'moment';
import axiosInstance from 'bootstrap/axios';
import { BASE_URL } from '../../constants';

export const patchUserRequest = payload => new Promise((resolve, reject) => {
  const form = new FormData();
  const patchPayload = [];

  forEach(payload, (value, field) => {
    // TODO: get JeanMarc to fix the endpoint so we do not read from one key but patch to another
    // for https://adkgroup.atlassian.net/browse/FOR-420
    if (field === 'dob' || field === 'birthDate') {
      field = 'dob';
      value = moment(value).format('M/DD/YYYY');
    }
    if (field === 'phoneNumber') {
      value = `+1${value}`;
    }

    if (value) {
      patchPayload.push({
        op: 'replace',
        path: `/${field}`,
        value
      });
    }
  });

  form.append('patchRequest', JSON.stringify(patchPayload));

  axiosInstance.patch(`${BASE_URL}/users`, form,
    {
      headers: {
        ...form.formHeaders
      }
    }).then(({ data }) => {
    console.log('profile patched successfully!', data);
    resolve(data);
  }).catch((error) => {
    console.log('error patching profile', error);
    reject(error);
  });
});
