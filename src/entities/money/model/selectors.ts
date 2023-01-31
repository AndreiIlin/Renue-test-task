import { useAppSelector } from 'shared/hooks';

export const getUserBalance = () =>
  useAppSelector(state => state.money.userBalance);

export const getMachineBalance = () =>
  useAppSelector(state => state.money.machineBalance);

export const getChangeBalance = () =>
  useAppSelector(state => state.money.change);

export const getNominals = () =>
  useAppSelector(state => state.money.incomingNominals);
