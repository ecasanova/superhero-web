export const purgeState = () => {
  window.localStorage.clear();
  console.log('local storage cleared');
};
