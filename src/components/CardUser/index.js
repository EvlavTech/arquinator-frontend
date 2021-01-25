import React from 'react';
import { Link } from 'react-router-dom';

import styles from './CardUser.module.scss';

const CardUser = ({ user }) => {
  return (
    <div className={styles.cardUser}>
      <div className={styles.user}>
        <div className={styles.picture}>
          <img src={user.avatar} alt="Profile" />
        </div>
        <div className={styles.infoUser}>
          <p>{user.username}</p>
          <p className={styles.occupation}>{user.occupation}</p>
        </div>
      </div>
      <Link className={styles.btnPerfil} to="/">
        Ver perfil
      </Link>
    </div>
  );
};

export default CardUser;
