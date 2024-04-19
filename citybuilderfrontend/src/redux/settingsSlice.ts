import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { populationSlice } from "./populationSlice";
import { stat } from "fs";

type Settings = {
  gameSpeed: number;
  memorizedGameSpeed: number;
  isGameRunning: boolean;
  intervalId: NodeJS.Timeout | null 
};


const initialState: Settings = {
  gameSpeed: 1000,
  memorizedGameSpeed: 0,
  isGameRunning: false,
  intervalId: null,
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setGameSpeed: (state, action: PayloadAction<number>) => {
      state.gameSpeed = action.payload;
    },
    handleAdvisorShowGameSpeed: (state) => {
      state.memorizedGameSpeed = state.gameSpeed
      state.gameSpeed = 0

    },
    handleAdvisorCloseGameSpeed: (state) => {
      state.gameSpeed = state.memorizedGameSpeed
    },
    setIsGameRunning: (state, action: PayloadAction<boolean>) => {
      state.isGameRunning = action.payload;
    },
    setIntervalId: (state, action: PayloadAction<NodeJS.Timeout | null>) => {
      if (state.intervalId) {
        clearInterval(state.intervalId);
      }
      state.intervalId = action.payload;
    },
  },
});

export const {
  setGameSpeed,
  setIsGameRunning,
  setIntervalId,
  handleAdvisorShowGameSpeed,
  handleAdvisorCloseGameSpeed,
} = settingsSlice.actions;
export const settingsReducer = settingsSlice.reducer;