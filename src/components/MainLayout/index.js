import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Header from 'components/Header';
import SideBar from 'components/Sidebar';

import styles from './MainLayout.module.scss';

const MainLayout = ({ children }) => {
  const [visibleSidebar, setVisibleSidebar] = useState(false);

  const showSidebar = () => setVisibleSidebar(!visibleSidebar);

  return (
    <div className={styles.container}>
      <aside
        className={
          visibleSidebar ? `${styles.sidebar} ${styles.active}` : styles.sidebar
        }
      >
        <SideBar showSidebar={showSidebar} />
      </aside>
      <main>
        <Header showSidebar={showSidebar} />
        {children}
      </main>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
