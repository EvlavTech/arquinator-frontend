import React from 'react';
import { AiFillCaretDown, AiOutlineLogout } from 'react-icons/ai';

import companyLogo from 'assets/space-cube.svg';
import avatar from 'assets/default-avatar.jpg';

import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <section className={styles.company_logo_container}>
        <img
          src={companyLogo}
          alt="Company Logo"
          className={styles.company_logo}
        />
      </section>
      <section className={styles.buttons}>
        <section className={styles.profile}>
          <img src={avatar} alt="Avatar" className={styles.avatar} />
          <span className={styles.profile_name}>Matheus Santana</span>
          <AiFillCaretDown className={styles.profile_options} />
        </section>
        <AiOutlineLogout className={styles.logout} />
      </section>
    </header>
  );
};

export default Header;
