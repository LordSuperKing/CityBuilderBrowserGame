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
    setFood: (state, action: PayloadAction<number>) => {
      state.resourcesState.food = action.payload;
    },
    foodConsume: (state, action: PayloadAction<number>) => {
      console.log(state.resourcesState.food - action.payload);
      if (state.resourcesState.food - action.payload < 0) {
        state.resourcesState.food = 0;
      } else {
        state.resourcesState.food = state.resourcesState.food - action.payload;
      }
    },
    setBipPercentage: (state, action: PayloadAction<number>) => {
      state.resourcesState.bipPercentage = action.payload;
    },
    setGold: (state,action: PayloadAction<number>) => {
      state.resourcesState.gold = action.payload
    }
  },
});

export const { setBipPercentage, setFood, foodConsume, setGold } =
  resourcesSlice.actions;
export const resourcesReducer = resourcesSlice.reducer;
