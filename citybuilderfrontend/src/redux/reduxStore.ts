import { configureStore } from "@reduxjs/toolkit"
import { populationReducer } from "./populationSlice";
import { resourcesReducer, resourcesSlice } from "./resourcesSlice";
import { cityReducer } from "./citySlice";
export const store = configureStore({
    reducer: {
        population: populationReducer,
        resources: resourcesReducer,
        city: cityReducer,

    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;