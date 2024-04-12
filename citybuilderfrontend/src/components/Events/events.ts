import { Resources } from "../../constants/enums";
import { handleAdvisorShow } from "../../redux/eventSlice";
import { AppDispatch, RootState } from "../../redux/reduxStore";

export type Requirements = {
  population?: number;
  cityLevel?: number;
  food?: number;
  gold?: number;

};

export type Event = {
  id: string;
  startMessage: string;
  endMessage: string;
  eventIsComplete: boolean;
  eventIsRunning: boolean;
  startRequirements: Requirements;
  endRequirements: Requirements;
};

export const allEventData: Event[] = [
  {
    id: "1",
    startMessage:
      "Our population cannot grow without sufficient food! We must increase our food supply.",
    endMessage:
      "Well done! Our food reserves are replenished, and our population can grow again.",
    eventIsComplete: false,
    eventIsRunning: false,
    startRequirements: { food: 0, cityLevel: 0 },
    endRequirements: { food: 1 },
  },
  {
    id: "2",
    startMessage:
      "Greater prosperity through gold accumulation can attract more settlers to our city. Let's boost our gold reserves!",
    endMessage:
      "Splendid! Our wealth has grown, drawing more people to our thriving community.",
    eventIsComplete: false,
    eventIsRunning: false,
    startRequirements: { population: 9, cityLevel: 0 },
    endRequirements: { gold: 0.2 },
  },
];
