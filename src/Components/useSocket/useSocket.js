import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import io from 'socket.io-client';
import { setSocket } from '../../reducers/userReducer/userActions';

const useSocket = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onConnect = () => {
    const socket = io(process.env.REACT_APP_API_URL, {transports: ['websocket', 'polling', 'flashsocket']});
    window.socket = socket;
    dispatch(setSocket(socket));

    socket.on('connect', () => {
      console.log(socket.id);
      history.push('/waiting');
    });
  };

  return {
    onConnect
  };
};

export default useSocket;