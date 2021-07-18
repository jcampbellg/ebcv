import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthKey } from '../../api/apiInstance';
import loginApi from '../../api/loginApi';
import { setLogin } from '../../reducers/userReducer/userActions';

const useLogin = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const authKey = localStorage.getItem('authKey');
    if (authKey) {
      setAuthKey(authKey);
      loginApi.user.get().then(({data}) => {
        dispatch(setLogin(data));
      }).catch(err => {
        console.error(err);
      });
    }
    // eslint-disable-next-line
  },[]);
  const isLogin = useSelector(({user} )=> user.isLogin);

  return {
    isLogin
  };
};

export default useLogin;