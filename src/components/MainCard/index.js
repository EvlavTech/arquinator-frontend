import React from 'react';

import styles from './MainCard.module.scss';

const MainCard = ({ title, children, primaryButtons, secondaryButtons }) => {
  return (
    <div className={styles.mainCard}>
      <div className={styles.header}>
        <div className={styles.title}>{title}</div>
        <div className={styles.buttons}>
          <div className={styles.primaryButtonsCard}>
            {primaryButtons?.map((button) => (
              <div className={styles.primaryButton}>{button}</div>
            ))}
          </div>
          <div className={styles.secondaryButtonsCard}>
            {secondaryButtons?.map((button) => (
              <div className={styles.secondaryButton}>{button}</div>
            ))}
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default MainCard;
