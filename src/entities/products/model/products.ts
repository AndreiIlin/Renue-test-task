import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product, productsInitialState as initialState } from './productsInitialState';

interface PurchaseProductPayload {
  id: number;
  purchaseCount: number;
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    purchaseProduct: (state, { payload }: PayloadAction<PurchaseProductPayload>) => {
      const currentProductInMachine = state.machineProducts.find(product =>
        product.id === payload.id);
      if (currentProductInMachine) {
        currentProductInMachine.count -= payload.purchaseCount;
      } else {
        return;
      }
      const currentProductInInventory = state.inventoryProducts.find(product =>
        product.id === payload.id);
      if (currentProductInInventory) {
        currentProductInInventory.count += payload.purchaseCount;
        return;
      }
      const inventoryProduct: Product = {
        ...currentProductInMachine,
        count: payload.purchaseCount,
      };
      state.inventoryProducts.push(inventoryProduct);
    },
  },
});
export const actions = productsSlice.actions;
export const reducer = productsSlice.reducer;
