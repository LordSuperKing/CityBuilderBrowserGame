import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { populationSlice } from "./populationSlice";

type Settings = {
  gameSpeed: number;
  isGameRunning: boolean;
  intervalId: NodeJS.Timeout | null 
};


const initialState: Settings = {
  gameSpeed: 1000,
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

export const { setGameSpeed, setIsGameRunning, setIntervalId } =
  settingsSlice.actions;
export const settingsReducer = settingsSlice.reducer;