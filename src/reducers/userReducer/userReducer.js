const INITIAL_STATE = {
  isLogin: false,
  authKey: null,
  user: null
}
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLogin: true,
        user: action.payload,
        authKey: action.payload._id
      };
    default:
      return state;
  }
};