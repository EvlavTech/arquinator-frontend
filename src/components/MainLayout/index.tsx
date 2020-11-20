import React, { useState } from 'react';

import Header from 'components/Header';
import SideBar from 'components/Sidebar';

import styles from './MainLayout.module.scss';

const MainLayout: React.FC = ({ children }) => {
  const [visibleSidebar, setVisibleSidebar] = useState(false);

  const showSidebar = () => setVisibleSidebar(!visibleSidebar);

  return (
    <div className={styles.container}>
      <aside className={visibleSidebar ? styles.sidebarActive : styles.sidebar}>
        <SideBar showSidebar={showSidebar} />
      </aside>
      <main>
        <Header showSidebar={showSidebar} />
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
