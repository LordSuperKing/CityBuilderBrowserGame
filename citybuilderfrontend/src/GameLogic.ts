import React from "react";
import { AppDispatch, RootState } from "./redux/reduxStore";
import { foodConsume } from "./redux/resourcesSlice";
import { Producing } from "./components/economy/Producing";
import { events } from "./components/Events/Events";

export const GameLogic =
  () => (dispatch: AppDispatch, getState: () => RootState) => {
    const intervalId = setInterval(() => {
            for(const building of getState().city.buildings) {
                dispatch(Producing(building))
            }
            dispatch(foodConsume(getState().population.amount))

            dispatch(events())


    },1000)
    return () => clearInterval(intervalId);
  };
