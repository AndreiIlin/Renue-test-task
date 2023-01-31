import { moneyModel } from 'entities/money';
import { productsModel } from 'entities/products';
import React from 'react';
import { toast } from 'react-toastify';
import { useActionCreators } from 'shared/hooks';
import { Button } from 'shared/ui/button';

export const GetChangeButton = () => {
  const userBalance = moneyModel.selectors.getUserBalance();
  const machineBalance = moneyModel.selectors.getMachineBalance();
  const machineProducts = productsModel.selectors.getMachineProducts();
  const moneyActions = useActionCreators(moneyModel.actions);
  const productsActions = useActionCreators(productsModel.actions);

  const handleGetChange = () => {
    if (!userBalance) return;
    let balance = userBalance;
    let isProductIssued = false;
    for (let currency of machineBalance) {
      if (!balance) {
        break;
      }
      if (currency.nominal > balance) {
        continue;
      }
      let currencyCount = currency.count;
      let decreaseCount = 0;
      while (currencyCount > 0 && balance >= currency.nominal) {
        balance -= currency.nominal;
        currencyCount -= 1;
        decreaseCount += 1;
      }
      moneyActions.decreaseMachineBalance({ nominal: currency.nominal, count: decreaseCount });
    }
    if (!balance) {
      moneyActions.getChange(userBalance);
      moneyActions.decreaseUserBalance(userBalance);
      toast.success('The change was given in full');
      return;
    }
    const rest = userBalance - balance;
    moneyActions.getChange(rest);
    moneyActions.decreaseUserBalance(rest);
    const products = [...machineProducts].sort((a, b) => b.price - a.price);
    for (let product of products) {
      if (!balance) {
        break;
      }
      if (product.price > balance) {
        continue;
      }
      let possibleCount = Math.floor(balance / product.price);
      while (possibleCount > product.count) {
        possibleCount -= 1;
      }
      let decreaseCount = product.price * possibleCount;
      balance -= decreaseCount;
      moneyActions.decreaseUserBalance(decreaseCount);
      productsActions.purchaseProduct({ id: product.id, purchaseCount: possibleCount });
      isProductIssued = true;
    }
    if (!isProductIssued) {
      toast.warning('Sorry, there is no change in the machine');
      return;
    }
    toast.warning('Sorry, there is no change in the machine, but you were given some products');
  };
  return (
    <Button onClick={handleGetChange} change>
      Get change
    </Button>
  );
};
