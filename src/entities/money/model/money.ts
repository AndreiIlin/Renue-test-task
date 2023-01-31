import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { moneyInitialState as initialState } from './moneyInitialState';

interface DecreaseMachineBalancePayload {
  nominal: number;
  count: number;
}

export const moneySlice = createSlice({
  name: 'money',
  initialState,
  reducers: {
    cashIn: (state, { payload }: PayloadAction<number>) => {
      state.userBalance += payload;
      const currentNominalInMachineBalance = state.machineBalance.find(currency =>
        currency.nominal === payload);
      if (currentNominalInMachineBalance) {
        currentNominalInMachineBalance.count += 1;
      }
    },
    decreaseUserBalance: (state, { payload }: PayloadAction<number>) => {
      state.userBalance -= payload;
    },
    decreaseMachineBalance: (state, { payload }: PayloadAction<DecreaseMachineBalancePayload>) => {
      const currentCurrency = state.machineBalance.find(currency => currency.nominal === payload.nominal);
      if (currentCurrency) {
        currentCurrency.count -= payload.count;
      }
    },
    getChange: (state, { payload }: PayloadAction<number>) => {
      state.change += payload;
    },
  },
});

export const actions = moneySlice.actions;
export const reducer = moneySlice.reducer;
