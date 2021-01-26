import React from 'react';
import PropTypes from 'prop-types';

import styles from './MainCard.module.scss';

const MainCard = ({ title, primaryButtons, secondaryButtons, children }) => (
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

MainCard.propTypes = {
  title: PropTypes.string.isRequired,
  primaryButtons: PropTypes.arrayOf(PropTypes.element),
  secondaryButtons: PropTypes.arrayOf(PropTypes.element),
  children: PropTypes.node,
};

MainCard.defaultProps = {
  primaryButtons: [],
  secondaryButtons: [],
  children: <span>Any children as been passed</span>,
};

export default MainCard;
