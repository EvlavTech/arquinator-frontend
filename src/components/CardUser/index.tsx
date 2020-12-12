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
      <img src={user.fotoUrl} alt="Profile" />
      <div>
        <p>{user.username}</p>
        <p className="occupation">{user.occupation}</p>
      </div>
    </div>
  );
};

export default CardUser;
