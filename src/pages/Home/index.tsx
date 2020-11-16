import React from 'react';

import MainLayout from 'components/MainLayout';

import styles from './Home.module.scss';

const Home: React.FC = () => {
  return (
    <>
      <MainLayout>
        <h1 className={styles.title}>Home</h1>
      </MainLayout>
    </>
  );
};

export default Home;
