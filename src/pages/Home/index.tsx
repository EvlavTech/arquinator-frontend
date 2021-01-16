import React from 'react';
import { RiAddBoxFill, RiAddBoxLine } from 'react-icons/ri';

import MainLayout from 'components/MainLayout';
import ProjectBoard from 'components/ProjectBoard';

import MainCard from 'components/MainCard';
import styles from './Home.module.scss';

const Home: React.FC = () => {
  return (
    <MainLayout>
      <MainCard title="Dashboard" primaryButtons={[<RiAddBoxFill />]}>
        <div className={styles.container}>
          <ProjectBoard />
        </div>
      </MainCard>
    </MainLayout>
  );
};

export default Home;
