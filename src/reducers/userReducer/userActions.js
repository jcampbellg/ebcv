export const setLogin = (user) => {
  return {
    type: 'LOGIN',
    payload: user
  };
};