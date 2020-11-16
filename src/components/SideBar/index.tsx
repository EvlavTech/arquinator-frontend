import React from 'react';
import {
  AiFillHome,
  AiFillDollarCircle,
  AiFillFolder,
  AiOutlineTeam,
} from 'react-icons/ai';

import logo from 'assets/EVLAV.svg';

import styles from './SideBar.module.scss';

const SideBar: React.FC = () => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <section className={styles.sidebar_item}>
        <AiFillHome className={styles.sidebar_item_icon} />
        <span className="sidebar_item_title">Home</span>
      </section>
      <section className={styles.sidebar_item}>
        <AiFillFolder className={styles.sidebar_item_icon} />
        <span className="sidebar_item_title">Projetos</span>
      </section>
      <section className={styles.sidebar_item}>
        <AiFillDollarCircle className={styles.sidebar_item_icon} />
        <span className="sidebar_item_title">Financeiro</span>
      </section>
      <section className={styles.sidebar_item}>
        <AiOutlineTeam className={styles.sidebar_item_icon} />
        <span className="sidebar_item_title">Equipe</span>
      </section>
    </div>
  );
};
export default SideBar;
