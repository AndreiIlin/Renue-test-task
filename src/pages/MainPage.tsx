import { UserBalanceDisplay, UserChangeDisplay } from 'entities/money/ui';
import { GetChangeButton } from 'features/getChange';
import React, { FC } from 'react';
import { Wrapper } from 'shared/ui/wrapper';
import { CashDepositPanel } from 'widgets/cashDepositPanel';
import { Inventory } from 'widgets/inventory';
import { Showcase } from 'widgets/showcase';
import styles from './styles.module.scss';

export const MainPage: FC = () => {

  return (
    <Wrapper>
      <div className={styles.root}>
        <h1 className={styles.title}>Vending machine</h1>
        <div className={styles.container}>
          <div className={styles.machine_side}>
            <Showcase />
          </div>
          <div className={styles.user_side}>
            <UserBalanceDisplay />
            <CashDepositPanel />
            <GetChangeButton />
            <UserChangeDisplay />
            <Inventory />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
