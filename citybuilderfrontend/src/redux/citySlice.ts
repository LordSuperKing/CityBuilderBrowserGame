import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BuildingData, allBuildingsData } from "../components/building";
import { useAppSelector } from "./reduxHooks";
import { AppDispatch, RootState } from "./reduxStore";
import { setBipPercentage } from "./resourcesSlice";

export type City = {
  level: number;
  buildings: BuildingData[];
  era: number;
};

export const initialState: City = {
  level: 0,
  buildings: allBuildingsData,
  era: 0,
};

export const updateBuildingPercentageIfPossible =
  (building: BuildingData, newPercentage: number) =>
  (dispatch: AppDispatch, getState: () => RootState) => {
    const availableBip = getState().resources.bipPercentage;
    const buildingToUpdate = getState().city.buildings.find(
      (it) => it.id === building.id
    );
    const totalAvailableBip = availableBip + buildingToUpdate!.bipPercentage;

    if (totalAvailableBip >= newPercentage) {
      dispatch(setBipPercentage(totalAvailableBip - newPercentage));
      dispatch(
        setBuildingBipPercentage({
          id: buildingToUpdate!.id,
          newPercentage: newPercentage,
        })
      );
    }
  };

export const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    setBuildingBipPercentage: (
      state,
      action: PayloadAction<{ id: string, newPercentage: number }>
    ) => {
      const building = state.buildings.find(
        (it) => it.id === action.payload.id
      );
      if (building) {
        building.bipPercentage = action.payload.newPercentage;
      }
    },
    setBuildingIsProducing: (state, action: PayloadAction<{id: string, isProducing: boolean}>) => {
      state.buildings = state.buildings.map((it) => it.id === action.payload.id ? {...it, isProducing: action.payload.isProducing} : it)
    },
    changeBuilding: (
      state,
      action: PayloadAction<{ oldBuildingId: string; newBuildingId: string }>
    ) => {
      const oldBuildingIndex = state.buildings.findIndex(
        (building) => building.id === action.payload.oldBuildingId
      );
      const newBuildingIndex = state.buildings.findIndex(
        (building) => building.id === action.payload.newBuildingId
      );

      if (oldBuildingIndex !== -1 && newBuildingIndex !== -1) {
        const oldBuilding = state.buildings[oldBuildingIndex];
        state.buildings[oldBuildingIndex] = state.buildings[newBuildingIndex];
        state.buildings[newBuildingIndex] = oldBuilding;
      }
    },
    setIsUpgradeAvailable: (
      state,
      action: PayloadAction<{ id: string; isUpgradeAvailable: boolean }>
    ) => {
      state.buildings = state.buildings.map((it) =>
        it.id === action.payload.id
          ? { ...it, isUpgradeAvailable: action.payload.isUpgradeAvailable }
          : it
      );
    },
    setCityLevel: (state, action: PayloadAction<number>) => {
      state.level = action.payload;
    },
  },
});

export const {
  setBuildingBipPercentage,
  setCityLevel,
  setIsUpgradeAvailable,
  changeBuilding,
  setBuildingIsProducing,
} = citySlice.actions;
export const cityReducer = citySlice.reducer;
