import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './CardUser.module.scss';

const CardUser = ({ user }) => (
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
    <div className={styles.btnPerfil}>
      <Link to="/">Ver perfil</Link>
    </div>
  </div>
);

CardUser.propTypes = {
  user: PropTypes.exact({
    username: PropTypes.string,
    occupation: PropTypes.string,
    avatar: PropTypes.string,
  }).isRequired,
};

export default CardUser;
