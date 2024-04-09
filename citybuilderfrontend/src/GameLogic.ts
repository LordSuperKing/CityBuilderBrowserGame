import React from "react";
import { AppDispatch, RootState } from "./redux/reduxStore";
import { foodConsume } from "./redux/resourcesSlice";
import { Producing } from "./components/economy/Producing";
import { setIntervalId, setIsGameRunning } from "./redux/settingsSlice";
import { events } from "./components/Events/events";

export const startGame =
  () => (dispatch: AppDispatch, getState: () => RootState) => {
    function handleTick() {
      for (const building of getState().city.buildings) {
        dispatch(Producing(building));
      }
      dispatch(foodConsume(getState().population.amount));
      dispatch(events());
    }

    if (!getState().settings.isGameRunning) {
      const intervalId = setInterval(handleTick, getState().settings.gameSpeed);
      dispatch(setIntervalId(intervalId));
      dispatch(setIsGameRunning(true));
    }
  };

export const stopGame = () => (dispatch: AppDispatch, getState: () => RootState) => {
  const intervalId = getState().settings.intervalId;
  if (intervalId) {
    clearInterval(intervalId);
    dispatch(setIntervalId(null));
    dispatch(setIsGameRunning(false));
  }
};
