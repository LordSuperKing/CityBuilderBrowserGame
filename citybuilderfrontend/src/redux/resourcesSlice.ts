import { createSlice } from "@reduxjs/toolkit";

export type Resources = {
    food: number;
} 

export type ResourcesState = {
    resourcesState: Resources;
}

const initialState: ResourcesState = {
    resourcesState: {
        food: 0
    }
}


export const resourcesSlice = createSlice({
    name: "resources",
    initialState,
    reducers: {
        
    }
})

export const {} = resourcesSlice.actions;
export const resourcesReducer = resourcesSlice.reducer