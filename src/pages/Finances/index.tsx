import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { FaFilter } from 'react-icons/fa';

import MainLayout from 'components/MainLayout';
import MainCard from 'components/MainCard';

import styles from './Finances.module.scss';

const data = [
  { month: 'nov/2020', income: 9231.02 },
  { month: 'dez/2020', income: 4532 },
  { month: 'jan/2021', income: 4731 },
  { month: 'fev/2021', income: 8124 },
];

const Finances: React.FC = () => {
  const parseToBRL = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  return (
    <MainLayout>
      <MainCard title="Financeiro" secondaryButtons={[<FaFilter />]}>
        <div className={styles.content}>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={data}
              margin={{
                top: 50,
                left: 50,
                bottom: 20,
              }}
            >
              <XAxis
                dataKey="month"
                label={{ value: 'Mês', position: 'bottom', offset: 2 }}
              />
              <YAxis
                label={{
                  value: 'Faturamento (R$)',
                  position: 'top',
                  offset: 20,
                }}
              />
              <Tooltip
                formatter={(value) => {
                  if (typeof value === 'number')
                    return [parseToBRL(value), 'Faturamento'];
                  throw new TypeError('Value must be a Number');
                }}
              />
              <Bar dataKey="income" fill="#6bc06b" />
            </BarChart>
          </ResponsiveContainer>
          <div className={styles.infoData}>
            <div className={styles.infoCard}>
              <span className={styles.title}>Média</span>
              <span className={styles.data}>R$ 5.431,02</span>
            </div>
          </div>
        </div>
      </MainCard>
    </MainLayout>
  );
};

export default Finances;
