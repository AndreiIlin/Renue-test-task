import cn from 'classnames';
import React, { ButtonHTMLAttributes, FC } from 'react';
import styles from './styles.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  money?: boolean;
  change?: boolean;
  store?: boolean;
}

export const Button: FC<ButtonProps> = ({ money, change, store, children, ...props }) => {
  const buttonClass = cn({
    [styles.button]: true,
    [styles.button_money]: money,
    [styles.button_change]: change,
    [styles.button_store]: store,
    [styles.button_disabled]: props.disabled,
  });
  return (
    <button className={buttonClass}  {...props}>
      {children}
    </button>
  );
};
