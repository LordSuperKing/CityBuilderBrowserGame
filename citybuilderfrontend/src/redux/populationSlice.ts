import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "./reduxStore";

const initPopulation = import.meta.env.VITE_POPULATION;


export type Population = {
  isGrowing: boolean;
  baseGrowthRate: number;
  amount: number;
  satisfaction: number;
};


const initialState: Population = {
  isGrowing: true,
  baseGrowthRate: 0.005,
  amount: initPopulation,
  satisfaction: 100,
};



export const populationSlice = createSlice({
  name: "population",
  initialState,
  reducers: {
    setPopulation: (state, action: PayloadAction<number>) => {
      state.amount = action.payload;
    },
    setSatisfaction: (state, action: PayloadAction<number>) => {
      state.satisfaction = action.payload
    },
    setIsGrowing: (state, action: PayloadAction<boolean>) => {
      state.isGrowing = action.payload
    },
  },
});

export const { setSatisfaction, setPopulation,setIsGrowing } = populationSlice.actions;
export const populationReducer = populationSlice.reducer;
