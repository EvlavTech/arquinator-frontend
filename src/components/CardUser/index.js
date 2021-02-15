import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import NotFoundIcon from '../../assets/not_found_icons.png';

import styles from './CardUser.module.scss';

const CardUser = ({ user }) => (
  <div className={styles.cardUser}>
    <div className={styles.user}>
      <div className={styles.picture}>
        <img
          className={styles.icon_avatar}
          src={user.avatar_url === undefined ? NotFoundIcon : user.avatar_url}
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
    avatar_url: PropTypes.string,
  }).isRequired,
};

export default CardUser;
