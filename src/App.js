import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import useLogin from './Components/useLogin/useLogin';
import Auth from './Views/Auth/Auth';
import Home from './Views/Home/Home';

const App = () => {
  const { isLogin } = useLogin();

  if (isLogin) {
    return (
      <Auth />
    );
  }
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route>
          <Redirect to='/' />
        </Route>
      </Switch>
    </>
  );
}

export default App;
