import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { populationSlice } from "./populationSlice";

type Settings = {
    gameSpeed: number;
}


const initialState: Settings = {
    gameSpeed: 1000,
}

export const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        setGameSpeed: (state, action: PayloadAction<number>)=> {

        }

    }
})

export const {} = settingsSlice.actions;
export const settingsReducer = settingsSlice.reducer;