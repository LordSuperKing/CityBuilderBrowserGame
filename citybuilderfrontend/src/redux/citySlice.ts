import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BuildingData, buildingsData } from "../components/building";
import { useAppSelector } from "./reduxHooks";
import { AppDispatch, RootState } from "./reduxStore";
import { setBipPercentage } from "./resourcesSlice";

export type City = {
  buildings: BuildingData[];
};

export type CityState = {
  city: City;
};

export const initialState: CityState = {
  city: {
    buildings: [
      buildingsData[0],
      buildingsData[1],
      buildingsData[2],
      buildingsData[3],
      buildingsData[4],
      buildingsData[5],
    ],
  },
};

export const updateBuildingPercentageIfPossible =
  (building: BuildingData, newPercentage: number) =>
  (dispatch: AppDispatch, getState: () => RootState) => {
    const availableBip = getState().resources.resourcesState.bipPercentage
    const buildingToUpdate = getState().city.city.buildings.find((it) => it.id === building.id)
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
      const building = state.city.buildings.find(
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
