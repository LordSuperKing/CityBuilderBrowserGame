import { Console } from "console";
import { startGame, stopGame } from "../../GameLogic";
import { setCityLevel, setIsUpgradeAvailable } from "../../redux/citySlice";
import {
  handleAdvisorShow,
  setEventComplete,
  setEventIsRunning,
} from "../../redux/eventSlice";
import { setIsGrowing } from "../../redux/populationSlice";
import { AppDispatch, RootState } from "../../redux/reduxStore";
import {
  handleAdvisorCloseGameSpeed,
  handleAdvisorShowGameSpeed,
  setIsGameRunning,
} from "../../redux/settingsSlice";
import { Event } from "./events";

export const eventLogic =
  (event: Event) => (dispatch: AppDispatch, getState: () => RootState) => {
    if (event.id === "1") {
      // Requirements start
      if (
        !event.eventIsRunning &&
        !event.eventIsComplete &&
        getState().population.amount > event.startRequirements.population!
      ) {
        dispatch(setEventIsRunning({ event: event, isRunning: true }));
        dispatch(setIsGrowing(false));
        dispatch(handleAdvisorShow(event));
        dispatch(stopGame());
      }
      // Requirements end
      if (
        event.eventIsRunning &&
        getState().resources.food >= event.endRequirements.food!
      ) {
        dispatch(setEventComplete({ event, isComplete: true }));
        dispatch(setEventIsRunning({ event, isRunning: false }));
        dispatch(handleAdvisorShow(event));
        dispatch(stopGame());

        dispatch(setIsGrowing(true));
        dispatch(setCityLevel(1));
      }
    }

    if (event.id === "2") {
      // Requirements start
      if (
        !event.eventIsComplete &&
        !event.eventIsRunning &&
        getState().population.amount > event.startRequirements.population!
      ) {
        dispatch(setEventIsRunning({ event: event, isRunning: true }));
        dispatch(setIsGrowing(false));
        dispatch(handleAdvisorShow(event));
        dispatch(stopGame());
      }
      // Requirements end
      if (
        event.eventIsRunning &&
        getState().resources.gold >= event.endRequirements.gold!
      ) {
        dispatch(setEventComplete({ event, isComplete: true }));
        dispatch(setEventIsRunning({ event, isRunning: false }));
        dispatch(handleAdvisorShow(event));
        dispatch(stopGame());

        dispatch(setIsGrowing(true));
        dispatch(setCityLevel(2));
      }
    }

    if (event.id === "3") {
      // Requirements start
      if (
        !event.eventIsComplete &&
        !event.eventIsRunning &&
        getState().population.amount > event.startRequirements.population!
      ) {
        dispatch(setEventIsRunning({ event: event, isRunning: true }));
        dispatch(setIsGrowing(false));
        dispatch(handleAdvisorShow(event));
        dispatch(stopGame());

        dispatch(
          setIsUpgradeAvailable({ id: "l100", isUpgradeAvailable: true })
        );
      }
      // Requirements end
      if (
        event.eventIsRunning &&
        getState().resources.wood >= event.endRequirements.wood!
      ) {
        dispatch(setEventComplete({ event, isComplete: true }));
        dispatch(setEventIsRunning({ event, isRunning: false }));
        dispatch(handleAdvisorShow(event));
        dispatch(stopGame());
  
        dispatch(setIsGrowing(true));
        dispatch(setCityLevel(3));
      }
    }

    if (event.id === "4") {
      // Requirements start
      if (
        !event.eventIsComplete &&
        !event.eventIsRunning &&
        getState().population.amount > event.startRequirements.population!
      ) {
        dispatch(setEventIsRunning({ event: event, isRunning: true }));
        dispatch(setIsGrowing(false));
        dispatch(handleAdvisorShow(event));
        dispatch(stopGame());

        dispatch(
          setIsUpgradeAvailable({ id: "l102", isUpgradeAvailable: true })
        );
      }
      // Requirements end
      if (
        event.eventIsRunning &&
        getState().resources.stone >= event.endRequirements.stone!
      ) {
        dispatch(setEventComplete({ event, isComplete: true }));
        dispatch(setEventIsRunning({ event, isRunning: false }));
        dispatch(handleAdvisorShow(event));
        dispatch(stopGame());
  
        dispatch(setIsGrowing(true));
        dispatch(setCityLevel(4));
      }
    }

    if (event.id === "5") {
      // Requirements start
      if (
        !event.eventIsComplete &&
        !event.eventIsRunning &&
        getState().population.amount > event.startRequirements.population!
      ) {
        dispatch(setEventIsRunning({ event: event, isRunning: true }));
        dispatch(setIsGrowing(false));
        dispatch(handleAdvisorShow(event));
        dispatch(stopGame());

        dispatch(
          setIsUpgradeAvailable({ id: "l101", isUpgradeAvailable: true })
        );
      }
      // Requirements end
      if (
        event.eventIsRunning &&
        getState().resources.amber >= event.endRequirements.amber!
      ) {
        dispatch(setEventComplete({ event, isComplete: true }));
        dispatch(setEventIsRunning({ event, isRunning: false }));
        dispatch(handleAdvisorShow(event));
        dispatch(stopGame());
  
        dispatch(setIsGrowing(true));
        dispatch(setCityLevel(5));
      }
    }

    // Requirements start
    if (event.id === "6") {
      if (
        !event.eventIsComplete &&
        !event.eventIsRunning &&
        getState().population.amount > event.startRequirements.population!
      ) {
        dispatch(setEventIsRunning({ event: event, isRunning: true }));
        dispatch(setIsGrowing(false));
        dispatch(handleAdvisorShow(event));
        dispatch(stopGame());

        dispatch(
          setIsUpgradeAvailable({ id: "l104", isUpgradeAvailable: true })
        );
      }
      // Requirements end
      if (
        event.eventIsRunning &&
        getState().resources.tools >= event.endRequirements.tools!
      ) {
        dispatch(setEventComplete({ event, isComplete: true }));
        dispatch(setEventIsRunning({ event, isRunning: false }));
        dispatch(handleAdvisorShow(event));
        dispatch(stopGame());
  
        dispatch(setIsGrowing(true));
        dispatch(setCityLevel(6));
      }
    }

    // Requirements start
    if (event.id === "7") {

      if (
        !event.eventIsComplete &&
        !event.eventIsRunning &&
        getState().population.amount > event.startRequirements.population!
      ) {
        dispatch(setEventIsRunning({ event: event, isRunning: true }));
        dispatch(setIsGrowing(false));
        dispatch(handleAdvisorShow(event));
        dispatch(stopGame());

        dispatch(
          setIsUpgradeAvailable({
            id: "l103",
            isUpgradeAvailable: true,
          })
        );
      }

      // Requirements end
      if (
        event.eventIsRunning &&
        getState().resources.weapons >= event.endRequirements.weapons!
      ) {
        dispatch(setEventComplete({ event, isComplete: true }));
        dispatch(setEventIsRunning({ event, isRunning: false }));
        dispatch(handleAdvisorShow(event));
        dispatch(stopGame());

        dispatch(setIsGrowing(true));
        dispatch(setCityLevel(7));
      }
    }

    // Requirements start
    if (event.id === "f1") {
      if (
        !event.eventIsComplete &&
        !event.eventIsRunning &&
        getState().resources.tools > event.startRequirements.tools!
      ) {
        dispatch(setEventIsRunning({ event: event, isRunning: true }));
        dispatch(setIsGrowing(false));

        dispatch(handleAdvisorShow(event));
        dispatch(stopGame());

        dispatch(
          setIsUpgradeAvailable({
            id: "1",
            isUpgradeAvailable: true,
          })
        );
      }
      if (
        event.eventIsRunning &&
        getState().city.buildings.find((it) => it.id === "f2")?.isProducing
      ) {
        dispatch(setEventComplete({ event, isComplete: true }));
        dispatch(setEventIsRunning({ event, isRunning: false }));
        dispatch(handleAdvisorShow(event));
        dispatch(stopGame());
        dispatch(setIsGrowing(true));
      }
    }
    // Requirements end

    // Requirements start
    if (event.id === "f2") {
      if (
        !event.eventIsComplete &&
        !event.eventIsRunning &&
        getState().events.eventList.find(
          (it) => it.id === event.startRequirements.eventIdsCompleted![0]
        )?.eventIsComplete &&
        getState().resources.weapons > event.startRequirements.weapons!
      ) {
        dispatch(setEventIsRunning({ event: event, isRunning: true }));
        dispatch(setIsGrowing(false));

        dispatch(handleAdvisorShow(event));
        dispatch(stopGame());

        dispatch(
          setIsUpgradeAvailable({
            id: "f2",
            isUpgradeAvailable: true,
          })
        );
      }

      // Requirements end
      if (
        event.eventIsRunning &&
        getState().city.buildings.find((it) => it.id === "f3")?.isProducing
      ) {
        dispatch(setEventComplete({ event, isComplete: true }));
        dispatch(setEventIsRunning({ event, isRunning: false }));
        dispatch(handleAdvisorShow(event));
        dispatch(stopGame());
        dispatch(setIsGrowing(true));
      }
    }
  };
