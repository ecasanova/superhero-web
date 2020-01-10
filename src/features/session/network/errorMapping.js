export const returnLoginMessageForError = (error) => {
  if (error.response && error.response.status) {
    switch (error.response.status) {
      case 401: return 'Incorrect password';
      case 402: return 'Your account payment is not complete yet. Please visit FormHealth.io and re-register.';
      case 403: return 'Your account is not available on this platform';
      case 404: return 'Email does not exist';
      default: return 'Unknown error logging in';
    }
  } else {
    return error.message ? error.message : 'Unknown error logging in';
  }
};

export const returnPasswordResetMessageForError = (error) => {
  if (error.response && error.response.status) {
    switch (error.response.status) {
      case 401: return 'Incorrect password';
      case 402: return 'Your account payment is not complete yet. Please visit FormHealth.io and re-register.';
      case 403: return 'Your account is not available on this platform';
      case 404: return 'Email does not exist';
      default: return 'Unknown error resetting password';
    }
  } else {
    return error.message ? error.message : 'Unknown error resetting password';
  }
};

export const returnPasswordResetCompleteMessageForError = (error) => {
  if (error.response && error.response.status) {
    switch (error.response.status) {
      case 400: return 'Your code has expired. Please request another code.';
      case 401: return 'Incorrect password';
      case 402: return 'Your account payment is not complete yet. Please visit FormHealth.io and re-register.';
      case 403: return 'Your account is not available on this platform';
      case 404: return 'Email does not exist';
      default: return 'Unknown error resetting password';
    }
  } else {
    return error.message ? error.message : 'Unknown error resetting password';
  }
};
