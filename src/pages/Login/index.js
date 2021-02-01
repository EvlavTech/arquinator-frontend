import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';
import logo from 'assets/EVLAV.svg';

function Login() {
  // TODO: form submit
  return (
    <div className="background">
      <div className="content">
        <form className="login">
          <img src={logo} alt="logo" />
          <label htmlFor="email">
            Email:
            <input type="email" />
          </label>
          <label htmlFor="password">
            Senha:
            <input type="password" />
          </label>
          <input type="submit" value="Entrar" />
        </form>

        <Link to="/">Cadastre-se</Link>
        <Link to="/">Esqueceu a senha?</Link>
      </div>
    </div>
  );
}

export default Login;
