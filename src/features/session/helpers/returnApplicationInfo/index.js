export const returnApplicationInfo = () => ({
  platform: 'web',
  version: 1,
  build: 1,
  environment: process.env.REACT_APP_ENVIRONMENT
});
