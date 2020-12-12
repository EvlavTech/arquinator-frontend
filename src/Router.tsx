import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Team from './pages/Team';

function Router(): React.FunctionComponentElement<void> {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/team" component={Team} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
