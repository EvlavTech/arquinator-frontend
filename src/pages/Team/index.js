import React, { useEffect, useState } from 'react';
import { FaFilter } from 'react-icons/fa';

import MainLayout from 'components/MainLayout';
import CardUser from 'components/CardUser';
import MainCard from 'components/MainCard';
import TeamService from 'services/Team/TeamService';
import { partition } from '../../utils';

import styles from './Team.module.scss';

const Team = () => {
  const [teamPartition, setTeamPartition] = useState([]);

  useEffect(async () => {
    const response = await TeamService.getAll(1);
    setTeamPartition(partition(response.data, 2));
  }, []);

  return (
    <MainLayout>
      <MainCard title="Equipe" secondaryButtons={[<FaFilter />]}>
        <div className={styles.main}>
          <div className={styles.users}>
            {teamPartition.map((array) => (
              <div className={styles.pairUsers} key={array[0].id}>
                <CardUser user={array[0]} />
                {array.length === 2 ? <CardUser user={array[1]} /> : null}
              </div>
            ))}
          </div>
        </div>
      </MainCard>
    </MainLayout>
  );
};

export default Team;
