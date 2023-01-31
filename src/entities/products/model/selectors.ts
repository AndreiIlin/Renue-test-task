import { useAppSelector } from 'shared/hooks';

export const getMachineProducts = () =>
  useAppSelector(state => state.products.machineProducts);
export const getUserProducts = () =>
  useAppSelector(state  => state.products.inventoryProducts);
