import React from 'react';
import bugsnag from '@bugsnag/js';
import bugsnagReact from '@bugsnag/plugin-react';

const { REACT_APP_WEB_BUGSNAG_API_KEY, REACT_APP_ENVIRONMENT, NODE_ENV } = process.env

// // https://docs.bugsnag.com/platforms/javascript/configuration-options/#logger
const logger = {
  debug: function () {},
  info: function () {},
  warn: function () {},
  error: console.warn
}

const bugsnagClient = bugsnag({
  apiKey: REACT_APP_WEB_BUGSNAG_API_KEY,
  maxBreadcrumbs: 40,
  maxEvents: 100,
  notifyReleaseStages: ['development', 'staging', 'production'],
  releaseStage: NODE_ENV === 'development' ? 'debug' : REACT_APP_ENVIRONMENT,
  logger
}).use(bugsnagReact, React);

export default bugsnagClient;
