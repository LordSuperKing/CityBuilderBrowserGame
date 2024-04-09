import { configureStore } from "@reduxjs/toolkit"
import { populationReducer } from "./populationSlice";
import { resourcesReducer, resourcesSlice } from "./resourcesSlice";
import { cityReducer } from "./citySlice";
import { settingsReducer, settingsSlice } from "./settingsSlice";
export const store = configureStore({
  reducer: {
    population: populationReducer,
    resources: resourcesReducer,
    city: cityReducer,
    settings: settingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;