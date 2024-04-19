import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Event, allEventData } from "../components/Events/events";

type eventData = {
  showAdvisor: boolean;
  activatedEvent: Event | null | undefined;
  eventList: Event[];
};

const initialState: eventData = {
  showAdvisor: false,
  activatedEvent: null,
  eventList: allEventData,
};

export const eventSlice = createSlice({
  name: "eventSlice",
  initialState,
  reducers: {
    handleAdvisorShow: (state, action: PayloadAction<Event>) => {
      state.activatedEvent = state.eventList.find((it) => it.id === action.payload.id);

      state.showAdvisor = true;
      if (action.payload.eventIsComplete) {
        state.activatedEvent = null;
      }
    },
    handleAdvisorClose: (state) => {
      state.showAdvisor = false;
    },
    setEventIsRunning: (
      state,
      action: PayloadAction<{ event: Event; isRunning: boolean }>
    ) => {
      state.eventList = state.eventList.map((it) =>
        it.id === action.payload.event.id
          ? { ...it, eventIsRunning: action.payload.isRunning }
          : it
      );
    },
    setEventComplete: (
      state,
      action: PayloadAction<{ event: Event; isComplete: boolean }>
    ) => {
      state.eventList = state.eventList.map((it) =>
        it.id === action.payload.event.id
          ? { ...it, eventIsComplete: action.payload.isComplete }
          : it
      );
    },
  },
});

export const {
  handleAdvisorShow,
  handleAdvisorClose,
  setEventIsRunning,
  setEventComplete,
} = eventSlice.actions;
export const eventsReducer = eventSlice.reducer;
