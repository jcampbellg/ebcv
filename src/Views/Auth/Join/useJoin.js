import { useReducer } from 'react';

const INITIAL_STATE = {
  code: '',
  isLoading: false,
  isFinished: false,
  error: false
};

const TYPE = {
  CODE: 'CODE',
  LOADING: 'LOADING',
  FINISH: 'FINISH',
  ERROR: 'ERROR'
};

const reducer = (state, {type, payload}) => {
  switch (type) {
    case TYPE.CODE:
      return {
        ...state,
        code: (!state.isLoading && !state.isFinished) ? payload : state.code
      };
    case TYPE.LOADING:
      return {
        ...state,
        isLoading: true,
        error: false
      };
    case TYPE.FINISH:
      return {
        ...state,
        isLoading: false,
        isFinished: true,
        error: false
      };
    case TYPE.ERROR:
      return {
        ...state,
        isLoading: false,
        isFinished: false,
        error: true
      };
    default:
      return state;
  }
};

const useJoin = (onConnect) => {
  const [{code, isLoading, isFinished, error}, dispatchReducer] = useReducer(reducer, INITIAL_STATE);

  const onJoin = () => {
    if (code.length > 3) {
      dispatchReducer({type: TYPE.LOADING});
      onConnect();
    }
  };

  return {
    code: {
      onChange: (e) => {
        dispatchReducer({type: TYPE.CODE, payload: e.target.value});
      },
      value: code
    },
    isLoading, isFinished, error,
    onJoin
  };
};

export default useJoin;