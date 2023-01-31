import { getRandomCount } from 'shared/libs';

interface Money {
  nominal: number;
  count: number;
}

interface MoneyState {
  userBalance: number;
  machineBalance: Money[];
  incomingNominals: number[];
  change: number;
}

export const moneyInitialState: MoneyState = {
  userBalance: 0,
  incomingNominals: [50, 100, 500, 1000],
  change: 0,
  machineBalance: [
    {
      nominal: 1000,
      count: getRandomCount(),
    },
    {
      nominal: 500,
      count: getRandomCount(),
    },
    {
      nominal: 100,
      count: getRandomCount(),
    },
    {
      nominal: 50,
      count: getRandomCount(),
    },
    {
      nominal: 10,
      count: getRandomCount(),
    },
    {
      nominal: 5,
      count: getRandomCount(),
    },
    {
      nominal: 1,
      count: getRandomCount(),
    },
  ],
};
