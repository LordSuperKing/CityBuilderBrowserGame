import { configureStore } from "@reduxjs/toolkit";
import { populationReducer } from "./populationSlice";
import { resourcesReducer } from "./resourcesSlice";
import { cityReducer } from "./citySlice";
import { settingsReducer } from "./settingsSlice";
import { eventsReducer as eventsReducer } from "./eventSlice";
export const store = configureStore({
  reducer: {
    population: populationReducer,
    resources: resourcesReducer,
    city: cityReducer,
    settings: settingsReducer,
    events: eventsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
