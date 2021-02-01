import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Team from './pages/Team';
import Finances from './pages/Finances';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/financeiro" component={Finances} />
        <Route exact path="/equipe" component={Team} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
