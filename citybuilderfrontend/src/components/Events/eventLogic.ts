import {
  handleAdvisorShow,
  setEventComplete,
  setEventIsRunning,
} from "../../redux/eventSlice";
import { setIsGrowing } from "../../redux/populationSlice";
import { AppDispatch, RootState } from "../../redux/reduxStore";
import { setIsGameRunning } from "../../redux/settingsSlice";
import { Event } from "./events";

export const eventLogic =
  (event: Event) => (dispatch: AppDispatch, getState: () => RootState) => {
    // if (event.id === "1") {
    //   if (
    //     getState().city.level === event.startRequirements.cityLevel &&
    //     !event.eventIsRunning &&
    //     !event.eventIsComplete &&
    //     getState().resources.food === event.startRequirements.food
    //   ) {
    //     dispatch(setEventIsRunning({ event: event, isRunning: true }));
    //     dispatch(setIsGrowing(false));
    //     dispatch(handleAdvisorShow(event));
    //   }
    //   if (
    //     getState().resources.food >= event.endRequirements.food! &&
    //     event.eventIsRunning
    //   ) {
    //     dispatch(setEventComplete({ event, isComplete: true }));
    //     dispatch(setEventIsRunning({ event, isRunning: false }));
    //     dispatch(handleAdvisorShow(event));
    //     dispatch(setIsGrowing(true));
    //   }
    // }

    // if (event.id === "2") {
    //   if (
    //     !event.eventIsComplete &&
    //     !event.eventIsRunning &&
    //     getState().population.amount > event.startRequirements.population! &&
    //     getState().city.level === event.startRequirements.cityLevel &&
    //     getState().events.eventList[0].eventIsComplete
    //   ) {
    //     dispatch(setEventIsRunning({ event: event, isRunning: true }));
    //     dispatch(setIsGrowing(false));
    //     dispatch(handleAdvisorShow(event));
    //   }
    // }
    // if (
    //   getState().events.eventList[0].eventIsComplete &&
    //   event.eventIsRunning &&
    //   getState().resources.gold > event.endRequirements.gold!
    // ) {
    //   dispatch(setEventComplete({ event, isComplete: true }));
    //   dispatch(setEventIsRunning({ event, isRunning: false }));
    //   dispatch(handleAdvisorShow(event));
    //   dispatch(setIsGrowing(true));
    // }
  };
