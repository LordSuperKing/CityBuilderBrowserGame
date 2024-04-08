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

    const resourcesSate = getState().resources.resourcesState;

    if (building.resource) {
      switch (building.resource) {
        case Resources.FOOD: {
          if (building.isProducing) {
            const newFoodState =
              resourcesSate.food +
              populationState.amount *
                building.baseProductionRate! *
                (building.bipPercentage / 100);

            console.log(
              populationState.amount *
                building.baseProductionRate! *
                (building.bipPercentage / 100)
            );
            dispatch(setFood(newFoodState));
          }
          break;
        }
        case Resources.GOLD:
          {
            if (building.isProducing) {
              const newGold =
                resourcesSate.gold +
                populationState.amount *
                  (resourcesSate.bipPercentage / 100) *
                  building.baseProductionRate!;
              dispatch(setGold(newGold));
            }
          }
          break;
        // case Resources.STONE:
        //   {
        //     if (building.isProducing) {
        //     }
        //   }
        //   break;
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
                if (newPopulation < 1 ) {
                  newPopulation = 1
                }

                dispatch(setPopulation(newPopulation))
              }
            }
          }
          break;

        case Resources.SATISFACTION:
          {
            if (building.isProducing) {
              let plusOrMinus = 1;
              if (resourcesSate.food === 0) {
                plusOrMinus = -1;
              }
              let newSatisfaction =
                populationState.satisfaction +
                building.baseProductionRate! * plusOrMinus;
              if (newSatisfaction < 0) {
                newSatisfaction = 0;
              }
              dispatch(setSatisfaction(newSatisfaction));
            }
          }
          break;

        default:
          break;
      }
    }
  };
