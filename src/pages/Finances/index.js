import React, { useEffect, useState } from 'react';
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

import FinanceService from 'services/Finances/FinanceService';
import styles from './Finances.module.scss';

const Finances = () => {
  const [data, setData] = useState([]);
  const [avg, setAverage] = useState();

  useEffect(async () => {
    const response = await FinanceService.getAll(1);
    const { finances, average } = response.data;
    setData(finances);
    setAverage(average);
  }, []);

  const parseToBRL = (value) =>
    new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);

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
                dataKey="date"
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
                  if (typeof value === 'number') {
                    return [parseToBRL(value), 'Faturamento'];
                  }
                  throw new TypeError('Value must be a Number');
                }}
              />
              <Bar dataKey="total_amount" fill="#6bc06b" />
            </BarChart>
          </ResponsiveContainer>
          <div className={styles.infoData}>
            <div className={styles.infoCard}>
              <span className={styles.title}>Média</span>
              <span className={styles.data}>{`R$ ${avg}`}</span>
            </div>
          </div>
        </div>
      </MainCard>
    </MainLayout>
  );
};

export default Finances;
