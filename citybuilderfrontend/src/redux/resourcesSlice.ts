import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Resources = {
  food: number;
  bipPercentage: number;
  gold: number;
};

const initialState: Resources = {

    food: 0,
    bipPercentage: 100,
    gold: 0,

};

export const resourcesSlice = createSlice({
  name: "resources",
  initialState,
  reducers: {
    setFood: (state, action: PayloadAction<number>) => {
      state.food = action.payload;
    },
    foodConsume: (state, action: PayloadAction<number>) => {
      if (state.food - action.payload < 0) {
        state.food = 0;
      } else {
        state.food = state.food - action.payload;
      }
    },
    setBipPercentage: (state, action: PayloadAction<number>) => {
      state.bipPercentage = action.payload;
    },
    setGold: (state,action: PayloadAction<number>) => {
      state.gold = action.payload
    }
  },
});

export const { setBipPercentage, setFood, foodConsume, setGold } =
  resourcesSlice.actions;
export const resourcesReducer = resourcesSlice.reducer;
