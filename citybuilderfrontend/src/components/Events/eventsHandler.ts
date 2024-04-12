import React from "react";
import { AppDispatch, RootState } from "../../redux/reduxStore";
import { setIsGrowing } from "../../redux/populationSlice";
import { handleAdvisorShow as startEvent } from "../../redux/eventSlice";
import { allEventData } from "./events";
import { eventLogic } from "./eventLogic";

export const eventsHandler =
  () => (dispatch: AppDispatch, getState: () => RootState) => {
    for (const event of getState().events.eventList) {
      dispatch(eventLogic(event));
    }
  };
