import { useReducer } from 'react';
import Joi from '@hapi/joi';
import loginApi from '../../api/loginApi';

const INITIAL_STATE = {
  email: '',
  code: '',
  isLoading: false,
  isFinished: false,
  error: false
};

const TYPE = {
  EMAIL: 'EMAIL',
  CODE: 'CODE',
  LOADING: 'LOADING',
  FINISH: 'FINISH',
  ERROR: 'ERROR'
};

const schema = Joi.object({
  email: Joi.string().email({ tlds: {allow: false} }).required()
});

const reducer = (state, {type, payload}) => {
  switch (type) {
    case TYPE.EMAIL:
      return {
        ...state,
        email: (!state.isLoading && !state.isFinished) ? payload : state.email,
        error: (!state.isLoading && !state.isFinished) ? false : state.error
      };
    case TYPE.CODE:
      return {
        ...state,
        code: (!state.isLoading && state.isFinished) ? payload : state.code
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

const useHome = () => {
  const [{email, code, isLoading, isFinished, error}, dispatch] = useReducer(reducer, INITIAL_STATE);

  const isValid = () => {
    const validation = schema.validate({email: email}, {abortEarly: false, errors: {wrap: {label: ''},}});
    return validation.error ? false : true;
  };

  const onLogin = () => {
    if (isValid()) {
      dispatch({type: TYPE.LOADING});
      loginApi.post({email}).then(({data}) => {
        dispatch({type: TYPE.FINISH});
        console.log(data);
      }).catch(err => {
        dispatch({type: TYPE.ERROR});
        console.error(err);
      });
    } else {
      dispatch({type: TYPE.ERROR});
    }
  };

  const onEnter = () => {
    loginApi.validate.post({code: code}).then(({data}) => {
      console.log(data);
    }).catch(err => {
      alert('Codigo Invalido');
    });
  }

  return {
    email: {
      onChange: (e) => {
        dispatch({type: TYPE.EMAIL, payload: e.target.value});
      },
      value: email,
      invalid: error
    },
    code: {
      onChange: (e) => {
        dispatch({type: TYPE.CODE, payload: e.target.value});
      },
      value: code
    },
    isLoading, isFinished, error,
    onLogin, onEnter
  };
};

export default useHome;