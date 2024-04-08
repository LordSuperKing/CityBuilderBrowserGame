import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BuildingData, allBuildingsData,  } from "../components/building";
import { useAppSelector } from "./reduxHooks";
import { AppDispatch, RootState } from "./reduxStore";
import { setBipPercentage } from "./resourcesSlice";

export type City = {
  level: number;
  buildings: BuildingData[];
  era: number
};



export const initialState: City = {
  level: 0,
  buildings: allBuildingsData,
  era: 0
};

export const updateBuildingPercentageIfPossible =
  (building: BuildingData, newPercentage: number) =>
  (dispatch: AppDispatch, getState: () => RootState) => {
    const availableBip = getState().resources.resourcesState.bipPercentage
    const buildingToUpdate = getState().city.buildings.find((it) => it.id === building.id)
    const totalAvailableBip = availableBip + buildingToUpdate!.bipPercentage

    if (totalAvailableBip >= newPercentage) {
        dispatch(setBipPercentage(totalAvailableBip - newPercentage))
        dispatch(setBuildingBipPercentage({id: buildingToUpdate!.id, newPercentage: newPercentage}));
    }
  };

export const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    setBuildingBipPercentage: (
      state,
      action: PayloadAction<{ id: string; newPercentage: number }>
    ) => {
      const building = state.buildings.find(
        (it) => it.id === action.payload.id
      );
      if (building) {
        building.bipPercentage = action.payload.newPercentage;
      }
    },
  },
});

export const { setBuildingBipPercentage } = citySlice.actions;
export const cityReducer = citySlice.reducer;
