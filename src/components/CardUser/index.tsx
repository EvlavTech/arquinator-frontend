import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

interface IUser {
  username: string;
  fotoUrl: string;
  occupation: string;
}

const CardUser: React.FC<{ user: IUser }> = ({ user }) => {
  return (
    <div className="user">
      <div>
        <div className="picture">
          <img src={user.fotoUrl} alt="Profile" />
        </div>
        <div className="info-user">
          <p>{user.username}</p>
          <p className="occupation">{user.occupation}</p>
        </div>
      </div>
      <Link className="btn-perfil" to="/">
        Ver perfil
      </Link>
    </div>
  );
};

export default CardUser;
