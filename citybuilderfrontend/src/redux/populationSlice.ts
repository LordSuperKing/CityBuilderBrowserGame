import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "./reduxStore";

export type Population = {
  isGrowing: boolean;
  baseGrowthRate: number;
  amount: number;
  satisfaction: number;
};

export type PopulationState = {
  populationState: Population;
};

const initialState: PopulationState = {
  populationState: {
    isGrowing: true,
    baseGrowthRate: 0.01,
    amount: 1,
    satisfaction: 100,
  },
};

export const startPopulationGrowth = () => (dispatch: AppDispatch) => {
  setInterval(() => {
    dispatch(populationGrowth());
  }, 1000);
};

export const populationSlice = createSlice({
  name: "population",
  initialState,
  reducers: {
    populationGrowth: (state) => {
      if (state.populationState.isGrowing) {
        const currentPopulation = state.populationState.amount;
        const growth =
          ((currentPopulation * (state.populationState.satisfaction - 50)) /
            100) *
          state.populationState.baseGrowthRate;
        let newPopulation;

        if (growth > 0) {
          newPopulation = currentPopulation + Math.ceil(growth);
        } else {
          newPopulation = currentPopulation + Math.floor(growth);
        }

        state.populationState.amount = newPopulation;
      }
    },
  },
});

export const { populationGrowth } = populationSlice.actions;
export const populationReducer = populationSlice.reducer;
