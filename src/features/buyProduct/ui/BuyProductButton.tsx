import { moneyModel } from 'entities/money';
import { productsModel } from 'entities/products';
import React, { FC } from 'react';
import { toast } from 'react-toastify';
import { useActionCreators } from 'shared/hooks';
import { Button } from 'shared/ui/button';

interface BuyProductButtonProps {
  id: number;
  price: number;
  count: number;
  name: string;
}

export const BuyProductButton: FC<BuyProductButtonProps> = ({ id, price, count, name }) => {
  const productsActions = useActionCreators(productsModel.actions);
  const moneyActions = useActionCreators(moneyModel.actions);
  const userBalance = moneyModel.selectors.getUserBalance();
  const handleBuyProduct = () => {
    if (userBalance < price || count <= 0) {
      toast.error('Insufficient funds on balance');
      return;
    }
    productsActions.purchaseProduct({ id, purchaseCount: 1 });
    toast.success(`Product ${name} was purchased`);
    moneyActions.decreaseUserBalance(price);
  };
  return (
    <Button onClick={handleBuyProduct} disabled={!count} store>
      Buy product
    </Button>
  );
};
