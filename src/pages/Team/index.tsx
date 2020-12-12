import React, { useState } from 'react';

import MainLayout from 'components/MainLayout';

import { RiFilterFill } from 'react-icons/ri';
import CardUser from 'components/CardUser';

import './styles.scss';

const Home: React.FC = () => {
  const [team, setTeam] = useState([
    {
      username: 'Rich Elton',
      fotoUrl:
        'https://avatars1.githubusercontent.com/u/25726888?s=460&u=8252555dd09e9b823676ff8e9585ca1b69ad3de6&v=4',
      occupation: 'Estagiário',
    },
    {
      username: 'Lucas Andrade',
      fotoUrl:
        'https://avatars3.githubusercontent.com/u/43856678?s=460&u=bf538a84251f7cbd882ea5b72078419826a06f4e&v=4',
      occupation: 'Estagiário',
    },
    {
      username: 'Matheus Santana',
      fotoUrl: 'https://avatars3.githubusercontent.com/u/40031356?s=460&v=4',
      occupation: 'Estagiário',
    },
  ]);

  return (
    <>
      <MainLayout>
        <div className="main">
          <div className="title">
            <h1>Equipe</h1>
            <div className="div-icon-filter">
              <RiFilterFill />
            </div>
            <hr />
          </div>

          <div className="users">
            {team.map((user) => {
              return (
                <div className="pair-users">
                  <CardUser user={user} />
                  <CardUser user={user} />
                </div>
              );
            })}
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Home;
