import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthKey } from '../../api/apiInstance';
import loginApi from '../../api/loginApi';
import { setLogin } from '../../reducers/userReducer/userActions';

const useLogin = () => {
  const [isReady, setReady] = useState(false);
  const isLogin = useSelector(({user} )=> user.isLogin);
  const dispatch = useDispatch();

  useEffect(() => {
    const authKey = localStorage.getItem('authKey');
    if (authKey) {
      setAuthKey(authKey);
      loginApi.user.get().then(({data}) => {
        dispatch(setLogin(data));
        setReady(true);
      }).catch(err => {
        console.error(err);
      });
    } else {
      setReady(true);
    }
    // eslint-disable-next-line
  },[]);

  return {
    isLogin, isReady
  };
};

export default useLogin;