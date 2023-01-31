import { moneyModel } from 'entities/money';
import React from 'react';
import { Display } from 'shared/ui/display';
import styles from './styles.module.scss';

export const UserBalanceDisplay = () => {
  const balance = moneyModel.selectors.getUserBalance();
  return (
    <>
      <h2 className={styles.title}>User balance</h2>
      <Display>
        {balance.toFixed(2)}
      </Display>
    </>
  );
};
