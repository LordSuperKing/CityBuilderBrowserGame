import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Resources = {
  food: number;
  bipPercentage: number;
  gold: number;
};

export type ResourcesState = {
  resourcesState: Resources;
};

const initialState: ResourcesState = {
  resourcesState: {
    food: 0,
    bipPercentage: 100,
    gold: 0,
  },
};

export const resourcesSlice = createSlice({
  name: "resources",
  initialState,
  reducers: {
    setBipPercentage: (state, action: PayloadAction<number>) => {
      state.resourcesState.bipPercentage = action.payload;
    }
  },
});

export const { setBipPercentage } = resourcesSlice.actions;
export const resourcesReducer = resourcesSlice.reducer;
