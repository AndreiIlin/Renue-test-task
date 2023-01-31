import { configureStore } from '@reduxjs/toolkit';
import { moneyModel } from 'entities/money';
import { productsModel } from 'entities/products';

export const store = configureStore({
  reducer: {
    money: moneyModel.reducer,
    products: productsModel.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
