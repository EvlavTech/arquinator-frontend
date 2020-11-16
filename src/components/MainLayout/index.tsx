import React from 'react';

import Header from 'components/Header';
import SideBar from 'components/SideBar';

import styles from './MainLayout.module.scss';

const MainLayout: React.FC = ({ children }) => {
  // TODO: responsive sidebar
  return (
    <div className={styles.container}>
      <aside>
        <SideBar />
      </aside>
      <main>
        <Header />
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
