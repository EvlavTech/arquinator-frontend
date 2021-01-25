import React from 'react';

import MainLayout from 'components/MainLayout';

import styles from './Home.module.scss';

const Home = () => {
  return (
    <MainLayout>
      <h1 className={styles.title}>Home</h1>
    </MainLayout>
  );
};

export default Home;
