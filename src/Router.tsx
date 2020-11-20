import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';

function Router(): React.FunctionComponentElement<void> {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
