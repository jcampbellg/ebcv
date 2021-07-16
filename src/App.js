import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './Views/Home/Home';

const App = () => {
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
