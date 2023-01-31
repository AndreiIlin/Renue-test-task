import React, { FC, PropsWithChildren } from 'react';
import styles from './styles.module.scss';

export const Display: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.display}>
      {children}
    </div>
  );
};
