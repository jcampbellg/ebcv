export const setLogin = (user) => {
  return {
    type: 'LOGIN',
    payload: user
  };
};

export const setSocket = (socket) => {
  return {
    type: 'SET_SOCKET',
    payload: socket
  };
};