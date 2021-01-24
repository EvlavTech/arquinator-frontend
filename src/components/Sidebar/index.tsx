import React from 'react';
import {
  AiFillHome,
  AiFillDollarCircle,
  AiFillFolder,
  AiOutlineTeam,
  AiOutlineClose,
} from 'react-icons/ai';

import logo from 'assets/EVLAV.svg';

import { Link } from 'react-router-dom';
import styles from './SideBar.module.scss';

interface SidebarProps {
  showSidebar(): void;
}

const Sidebar: React.FC<SidebarProps> = ({ showSidebar }) => {
  return (
    <div className={styles.container}>
      <AiOutlineClose
        size={28}
        className={styles.closeSidebar}
        onClick={() => showSidebar()}
      />
      <img src={logo} alt="Logo" className={styles.logo} />
      <section className={styles.sidebar_item}>
        <AiFillHome className={styles.sidebar_item_icon} />
        <Link to="/home" className={styles.sidebar_item_title}>
          Home
        </Link>
      </section>
      <section className={styles.sidebar_item}>
        <AiFillFolder className={styles.sidebar_item_icon} />
        <Link to="/projetos" className={styles.sidebar_item_title}>
          Projetos
        </Link>
      </section>
      <section className={styles.sidebar_item}>
        <AiFillDollarCircle className={styles.sidebar_item_icon} />
        <Link to="/financeiro" className={styles.sidebar_item_title}>
          Financeiro
        </Link>
      </section>
      <section className={styles.sidebar_item}>
        <AiOutlineTeam className={styles.sidebar_item_icon} />
        <Link to="/equipe" className={styles.sidebar_item_title}>
          Equipe
        </Link>
      </section>
    </div>
  );
};
export default Sidebar;
