import React from 'react';
import { RiAddBoxFill } from 'react-icons/ri';

import MainLayout from 'components/MainLayout';
import ProjectBoard from 'components/ProjectBoard';

import MainCard from 'components/MainCard';
import { FaFilter } from 'react-icons/fa';
import styles from './Home.module.scss';

const Home = () => (
  <MainLayout>
    <MainCard
      title="Dashboard"
      primaryButtons={[<RiAddBoxFill />]}
      secondaryButtons={[<FaFilter />]}
    >
      <div className={styles.container}>
        <ProjectBoard />
      </div>
    </MainCard>
  </MainLayout>
);

export default Home;
