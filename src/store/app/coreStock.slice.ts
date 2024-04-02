import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@utils/redux.ts';

export type ITopList = {
  readonly ticker: string;
  readonly price: string;
  readonly change_amount: string;
  readonly change_percentage: string;
  readonly volume: string;
};

export type ICoreStockSlice = {
  top_gainers: ITopList[];
};
const initialState: ICoreStockSlice = {
  top_gainers: []
};

export const coreStockSlice = createSlice({
  name: 'coreStock',
  initialState,
  reducers: {
    SET_TOP_GAINER_LOSERS_DATA: (state, action: PayloadAction<ITopList[]>) => ({
      ...state,
      top_gainers: action.payload
    })
  }
});

export const { SET_TOP_GAINER_LOSERS_DATA } = coreStockSlice.actions;

export const GET_TOP_GAINER_LOSERS_DATA = (state: RootState) =>
  state.app.coreStock;
