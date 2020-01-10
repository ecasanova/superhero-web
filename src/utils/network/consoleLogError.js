import bugsnagClient from 'bootstrap/bugsnag';

export const consoleLogError = (error, payload) => {
  let errorTable;
  if (error.response) {
    errorTable = {
      _status: error.response.status,
      _message: error.response.data.message,
      ...payload
    };
  } else {
    errorTable = {
      _status: '-',
      _message: error.message,
      ...payload
    };
  }
  bugsnagClient.notify(error);
  console.table(errorTable);
};
