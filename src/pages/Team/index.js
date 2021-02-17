import React, { useState, useEffect } from 'react';
import { FaFilter } from 'react-icons/fa';

import MainLayout from 'components/MainLayout';
import CardUser from 'components/CardUser';
import MainCard from 'components/MainCard';
import TeamService from 'services/Team/TeamService';

import styles from './Team.module.scss';

const Team = () => {
  const [team, setTeam] = useState([
    {
      username: 'Rich Elton',
      avatar:
        'https://avatars1.githubusercontent.com/u/25726888?s=460&u=8252555dd09e9b823676ff8e9585ca1b69ad3de6&v=4',
      occupation: 'Estagiário',
    },
    {
      username: 'Lucas Andrade',
      avatar:
        'https://avatars3.githubusercontent.com/u/43856678?s=460&u=bf538a84251f7cbd882ea5b72078419826a06f4e&v=4',
      occupation: 'Estagiário',
    },
    {
      username: 'Matheus Santana',
      avatar: 'https://avatars3.githubusercontent.com/u/40031356?s=460&v=4',
      occupation: 'Estagiário',
    },
  ]);

  useEffect(async () => {
    const teamResponse = await TeamService.getAll();
    setTeam(teamResponse);
  }, []);

  return (
    <MainLayout>
      <MainCard title="Equipe" secondaryButtons={[<FaFilter />]}>
        <div className={styles.main}>
          <div className={styles.users}>
            {team.map((user) => (
              <CardUser user={user} />
            ))}
          </div>
        </div>
      </MainCard>
    </MainLayout>
  );
};

export default Team;
