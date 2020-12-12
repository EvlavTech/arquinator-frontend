import React from 'react';
import MainLayout from 'components/MainLayout';
import MainCard from 'components/MainCard';
import { FaFilter } from 'react-icons/fa';
import { MdAddBox } from 'react-icons/md';

const Finances: React.FC = () => {
  return (
    <>
      <MainLayout>
        <MainCard
          title="Financeiro"
          primaryButtons={[<MdAddBox />]}
          secondaryButtons={[<FaFilter />]}
        >
          <h1>Financeiro</h1>
        </MainCard>
      </MainLayout>
    </>
  );
};

export default Finances;
