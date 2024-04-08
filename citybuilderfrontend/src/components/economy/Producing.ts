import { Resources } from "../../constants/enums";
import { setPopulation, setSatisfaction } from "../../redux/populationSlice";
import { useAppDispatch, useAppSelector } from "../../redux/reduxHooks";
import { AppDispatch, RootState } from "../../redux/reduxStore";
import { setFood, setGold } from "../../redux/resourcesSlice";
import { BuildingData } from "../building";

export const Producing =
  (building: BuildingData) =>
  (dispatch: AppDispatch, getState: () => RootState) => {
    const populationState = getState().population;

    const resourcesState = getState().resources.resourcesState;

    if (building.resource) {
      switch (building.resource) {
        case Resources.FOOD: {
          if (building.isProducing) {
            const newFoodState =
              resourcesState.food +
              populationState.amount *
                building.baseProductionRate! *
                (building.bipPercentage / 100);

            dispatch(setFood(newFoodState));
          }
          break;
        }
        case Resources.GOLD:
          {
            if (building.isProducing) {
              const newGold =
                resourcesState.gold +
                populationState.amount *
                  (resourcesState.bipPercentage / 100) *
                  building.baseProductionRate!;
              dispatch(setGold(newGold));
            }
          }
          break;

        case Resources.POPULATION:
          {
            if (building.isProducing) {
              if (populationState.isGrowing) {
                const currentPopulation = populationState.amount;
                const growth =
                  ((currentPopulation * (populationState.satisfaction - 50)) /
                    100) *
                  populationState.baseGrowthRate;
                let newPopulation;

                if (growth > 0) {
                  newPopulation = currentPopulation + Math.ceil(growth);
                } else {
                  newPopulation = currentPopulation + Math.floor(growth);
                }
                if (newPopulation < 1) {
                  newPopulation = 1;
                }

                dispatch(setPopulation(newPopulation));
              } else {
                const currentPopulation = populationState.amount;
                const growth =
                  ((currentPopulation * (populationState.satisfaction - 50)) /
                    100) *
                  populationState.baseGrowthRate;
                let newPopulation;

                if (growth > 0) {
                  newPopulation = currentPopulation + Math.ceil(growth);
                } else {
                  newPopulation = currentPopulation + Math.floor(growth);
                }
                if (newPopulation > currentPopulation) {
                  newPopulation = currentPopulation;
                }
                if (newPopulation < 1) {
                  newPopulation = 1;
                }

                dispatch(setPopulation(newPopulation));
              }
            }
          }
          break;

        case Resources.SATISFACTION:
          {
            if (building.isProducing) {
              let plusOrMinus = 1;
              if (resourcesState.food < populationState.amount) {
                plusOrMinus = -1;
              }
              let newSatisfaction =
                populationState.satisfaction +
                building.baseProductionRate! * plusOrMinus;
                
              if (newSatisfaction < 0) {
                newSatisfaction = 0;
              }
              if (newSatisfaction > 100) {
                newSatisfaction = 100;
              }
              dispatch(setSatisfaction(newSatisfaction));
            }
          }
          break;

        // case Resources.STONE:
        //   {
        //     if (building.isProducing) {
        //     }
        //   }
        //   break;

        default:
          break;
      }
    }
  };
