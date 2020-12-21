import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Team from './pages/Team';
import Projects from './pages/Projects';
import Finances from './pages/Finances';

function Router(): React.FunctionComponentElement<void> {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/financeiro" component={Finances} />
        <Route path="/equipe" component={Team} />
        <Route path="/projetos" component={Projects} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
