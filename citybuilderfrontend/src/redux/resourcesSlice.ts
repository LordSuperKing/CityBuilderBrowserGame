import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Resources = {
  food: number;
  gold: number;
  wood: number;
  stone: number;
  amber: number;
  tools: number;
  weapons: number;
};

type ResourcesState = Resources & { bipPercentage: number };

const initialState: ResourcesState = {
  food: import.meta.env.VITE_FOOD,
  gold: import.meta.env.VITE_GOLD,
  wood: import.meta.env.VITE_WOOD,
  stone: import.meta.env.VITE_STONE,
  amber: import.meta.env.VITE_AMBER,
  tools: import.meta.env.VITE_TOOLS,
  weapons: import.meta.env.VITE_WEAPONS,

  bipPercentage: 100,
};

export const resourcesSlice = createSlice({
  name: "resources",
  initialState,
  reducers: {
    setFood: (state, action: PayloadAction<number>) => {
      state.food = action.payload;
    },
    foodConsume: (state, action: PayloadAction<number>) => {
      if (state.food - action.payload < 0) {
        state.food = 0;
      } else {
        state.food = state.food - action.payload;
      }
    },
    setBipPercentage: (state, action: PayloadAction<number>) => {
      state.bipPercentage = action.payload;
    },
    setGold: (state, action: PayloadAction<number>) => {
      state.gold = action.payload;
    },
    setWood: (state, action: PayloadAction<number>) => {
      state.wood = action.payload;
    },
    setStone: (state, action: PayloadAction<number>) => {
      state.stone = action.payload;
    },
    setAmber: (state, action: PayloadAction<number>) => {
      state.amber = action.payload;
    },
    setTools: (state, action: PayloadAction<number>) => {
      state.tools = action.payload;
    },
    setWeapons: (state, action: PayloadAction<number>) => {
      state.weapons = action.payload;
    },
    payResources: (state, action: PayloadAction<Resources>) => {
      state.food -= action.payload.food;
      state.gold -= action.payload.gold;
      state.stone -= action.payload.stone;
      state.wood -= action.payload.wood;
    },
  },
});

export const {
  setBipPercentage,
  setFood,
  foodConsume,
  setGold,
  setWood,
  setStone,
  payResources,
  setAmber,
  setTools,
  setWeapons,
} = resourcesSlice.actions;
export const resourcesReducer = resourcesSlice.reducer;
