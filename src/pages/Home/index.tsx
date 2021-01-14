import React from 'react';

import MainLayout from 'components/MainLayout';
import ProjectBoard from 'components/ProjectBoard';

import MainCard from 'components/MainCard';
import styles from './Home.module.scss';

const Home: React.FC = () => {
  return (
    <MainLayout>
      <MainCard title="Dashboard">
        <div className={styles.container}>
          <ProjectBoard />
        </div>
      </MainCard>
    </MainLayout>
  );
};

export default Home;
