import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Join from './Join/Join';

const Auth = () => {
  return (
    <Switch>
      <Route exact path='/join' component={Join}/>
      <Route>
        <Redirect to='/join' />
      </Route>
    </Switch>
  );
};

export default Auth;