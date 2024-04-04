import { configureStore } from "@reduxjs/toolkit"
import { populationReducer } from "./populationSlice";
import { resourcesReducer, resourcesSlice } from "./resourcesSlice";
export const store = configureStore({
    reducer: {
        population: populationReducer,
        resources: resourcesReducer,

    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;