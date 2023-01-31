import { moneyModel } from 'entities/money';
import React, { FC } from 'react';
import { toast } from 'react-toastify';
import { useActionCreators } from 'shared/hooks';
import { Button } from 'shared/ui/button';

interface CashInButtonProps {
  nominal: number;
}

export const CashInButton: FC<CashInButtonProps> = ({ nominal }) => {
  const moneyActions = useActionCreators(moneyModel.actions);
  const handleCashIn = () => {
    moneyActions.cashIn(nominal);
    toast.success(`The balance was topped up by ${nominal}`);
  };
  return (
    <Button onClick={handleCashIn} money>
      {nominal}
    </Button>
  );
};
