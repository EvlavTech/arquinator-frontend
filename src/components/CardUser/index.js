import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './CardUser.module.scss';

const CardUser = ({ user }) => (
  <div className={styles.cardUser}>
    <div className={styles.user}>
      <div className={styles.picture}>
        <img
          src={
            user.avatar === undefined
              ? 'https://avatars1.githubusercontent.com/u/25726888?s=460&u=8252555dd09e9b823676ff8e9585ca1b69ad3de6&v=4'
              : user.avatar
          }
          alt="Profile"
        />
      </div>
      <div className={styles.infoUser}>
        <p>{user.name}</p>
        <p className={styles.email}>{user.email}</p>
      </div>
    </div>
    <Link className={styles.btnPerfil} to="/">
      Ver perfil
    </Link>
  </div>
);

CardUser.propTypes = {
  user: PropTypes.exact({
    name: PropTypes.string,
    email: PropTypes.string,
    avatar: PropTypes.string,
  }).isRequired,
};

export default CardUser;
