import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Finances from './pages/Finances';

function Router(): React.FunctionComponentElement<void> {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Switch>
        <Route exact path="/financeiro" component={Finances} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
