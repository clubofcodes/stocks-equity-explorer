import { combineReducers } from '@reduxjs/toolkit';
import { configSlice } from '@/store/app/config.slice.ts';
import { authSlice } from '@/store/app/auth.slice.ts';
import { coreStockSlice } from './coreStock.slice';

export const appReducer = combineReducers({
  auth: authSlice.reducer,
  config: configSlice.reducer,
  coreStock: coreStockSlice.reducer
});
