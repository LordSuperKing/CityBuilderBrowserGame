import { ResourcesEnum } from "../../constants/enums";
import { handleAdvisorShow } from "../../redux/eventSlice";
import { AppDispatch, RootState } from "../../redux/reduxStore";

export type Requirements = {
  eventIdsCompleted?: string[];
  population?: number;
  cityLevel?: number;
  food?: number;
  gold?: number;
  wood?: number;
  stone?: number;
  amber?: number;
  tools?: number;
  weapons?: number;
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
      "Our people are growing restless and angry due to the lack of food! We must act swiftly to bolster our food supplies and ensure our population can continue to thrive.",
    endMessage:
      "Fantastic! Your efforts have secured our food supply and allowed continued growth for our population.",
    eventIsComplete: import.meta.env.VITE_EVENT_1_IS_COMPLETE === "true",
    eventIsRunning: false,
    startRequirements: { population: 4 },
    endRequirements: { food: 4 },
  },
  {
    id: "2",
    startMessage:
      "Greater prosperity beckons! Those not engaged in resource gathering will contribute to our gold reserves, attracting more settlers to our burgeoning city.",
    endMessage:
      "Splendid! Our wealth has grown, drawing more people to our thriving community.",
    eventIsComplete: import.meta.env.VITE_EVENT_2_IS_COMPLETE === "true",
    eventIsRunning: false,
    startRequirements: {
      population: 9,
    },
    endRequirements: { gold: 2 },
  },
  {
    id: "3",
    startMessage:
      "We need wood. There's a jungle nearby that offers plenty of timber for our needs.",
    endMessage:
      "Excellent, we now have enough building materials to expand our city!",
    eventIsComplete: import.meta.env.VITE_EVENT_3_IS_COMPLETE === "true",
    eventIsRunning: false,
    startRequirements: {
      population: 19,
    },
    endRequirements: { wood: 2 },
  },
  {
    id: "4",
    startMessage:
      "The nearby mountains are rich in stone, essential for strengthening our buildings. Let's start extracting!",
    endMessage:
      "We have gathered enough stone to reinforce our structures and expand further!",
    eventIsComplete: import.meta.env.VITE_EVENT_4_IS_COMPLETE === "true",
    eventIsRunning: false,
    startRequirements: {
      population: 49,
    },
    endRequirements: { stone: 2 },
  },
  {
    id: "5",
    startMessage:
      "Sparkling treasures have been spotted along the riverbanks! Amber, washed ashore by the river's gentle flows, promises wealth and prosperity. Let's gather this precious gem to enhance our trade and adornments.",
    endMessage:
      "We have successfully harvested a bountiful amount of amber from the river! This wealth of resources boosts our village's prestige and trade potential, drawing attention and admiration from afar.",
    eventIsComplete: import.meta.env.VITE_EVENT_5_IS_COMPLETE === "true",
    eventIsRunning: false,
    startRequirements: {
      population: 99,
    },
    endRequirements: { amber: 2 },
  },
  {
    id: "6",
    startMessage:
      "Our city is growing, and we need more tools to keep up with the demand! Gather resources and craft essential tools to support our progress.",
    endMessage:
      "Congratulations on crafting the essential tools our city needed! Your dedication and craftsmanship have paved the way for further advancement.",
    eventIsComplete: import.meta.env.VITE_EVENT_6_IS_COMPLETE === "true",
    eventIsRunning: false,
    startRequirements: {
      population: 199,
    },
    endRequirements: { tools: 2 },
  },
  {
    id: "7",
    startMessage:
      "The wilds are dangerous, and our people must be protected. Let's forge weapons to ensure our survival and prosperity.",
    endMessage:
      "Our warriors are now equipped! With these weapons, we can defend our home and hunt more effectively.",
    eventIsComplete: import.meta.env.VITE_EVENT_7_IS_COMPLETE === "true",
    eventIsRunning: false,
    startRequirements: {
      population: 399,
    },
    endRequirements: { weapons: 2 },
  },
  {
    id: "f1",
    startMessage:
      "To sustain our growing population, it's time to harness the river's bounty. Let's upgrade our food production to include fishing.",
    endMessage:
      "Our fishing techniques have been successfully established! This will significantly boost our food supply, sustaining more lives and activities.",
    eventIsComplete: import.meta.env.VITE_EVENT_F1_IS_COMPLETE === "true",
    eventIsRunning: false,
    startRequirements: {
      tools: 5,
    },
    endRequirements: {},
  },
  {
    id: "f2",
    startMessage:
      "With our new weapons, we are ready to take on larger challenges. Let's upgrade our food production by hunting mammoths.",
    endMessage:
      "The mammoth hunt was a success! This major advancement ensures a more stable and abundant food supply for our community.",
    eventIsComplete: import.meta.env.VITE_EVENT_F2_IS_COMPLETE === "true",
    eventIsRunning: false,
    startRequirements: {
      eventIdsCompleted: ["f1"],
      weapons: 5,
    },
    endRequirements: {},
  },
];
