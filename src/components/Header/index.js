import React from 'react';
import PropTypes from 'prop-types';
import {
  AiFillCaretDown,
  AiOutlineLogout,
  AiOutlineMenuUnfold,
} from 'react-icons/ai';

import companyLogo from 'assets/space-cube.svg';
import avatar from 'assets/default-avatar.jpg';

import styles from './Header.module.scss';

const Header = ({ showSidebar }) => (
  <header className={styles.header}>
    <section className={styles.company_logo_container}>
      <AiOutlineMenuUnfold
        className={styles.sidebar_icon}
        onClick={() => showSidebar()}
      />
      <img
        src={companyLogo}
        alt="Company Logo"
        className={styles.company_logo}
      />
    </section>
    <section className={styles.buttons}>
      <section className={styles.profile}>
        <img src={avatar} alt="Avatar" className={styles.avatar} />
        <span className={styles.profile_name}>
          Matheus Alcantara de Santana
        </span>
        <AiFillCaretDown className={styles.profile_options} size={12} />
      </section>
      <AiOutlineLogout className={styles.logout} size={28} />
    </section>
  </header>
);

Header.propTypes = {
  showSidebar: PropTypes.func.isRequired,
};

export default Header;
