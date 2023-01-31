import { moneyModel } from 'entities/money';
import React from 'react';
import { Display } from 'shared/ui/display';
import styles from './styles.module.scss';

export const UserChangeDisplay = () => {
  const balance = moneyModel.selectors.getChangeBalance();
  return (
    <>
      <h2 className={styles.title}>Change balance</h2>
      <Display>
        {balance.toFixed(2)}
      </Display>
    </>
  );
};
