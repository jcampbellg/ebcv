import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import useSocket from '../../Components/useSocket/useSocket';
import Join from './Join/Join';
import WaitingRoom from './WaitingRoom/WaitingRoom';

const Auth = () => {
  const { onConnect } = useSocket();
  return (
    <Switch>
      <Route exact path='/join'>
        <Join onConnect={onConnect} />
      </Route>
      <Route exact path='/waiting' component={WaitingRoom} />
      <Route>
        <Redirect to='/join' />
      </Route>
    </Switch>
  );
};

export default Auth;