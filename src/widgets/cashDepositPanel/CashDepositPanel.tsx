import { moneyModel } from 'entities/money';
import { CashInButton } from 'features/cashIn';
import React from 'react';
import styles from './styles.module.scss';

export const CashDepositPanel = () => {
  const nominals = moneyModel.selectors.getNominals();
  return (
    <div className={styles.container}>
      {nominals.map(nominal => <CashInButton nominal={nominal} key={nominal} />)}
    </div>
  );
};
