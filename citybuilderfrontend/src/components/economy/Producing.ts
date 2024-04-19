import { ResourcesEnum } from "../../constants/enums";
import { setPopulation, setSatisfaction } from "../../redux/populationSlice";
import { useAppDispatch, useAppSelector } from "../../redux/reduxHooks";
import { AppDispatch, RootState } from "../../redux/reduxStore";
import {
  setAmber,
  setFood,
  setGold,
  setStone,
  setTools,
  setWeapons,
  setWood,
} from "../../redux/resourcesSlice";
import { BuildingData } from "../building";

export const Producing =
  (building: BuildingData) =>
  (dispatch: AppDispatch, getState: () => RootState) => {
    const populationState = getState().population;

    const resourcesState = getState().resources;

    if (building.resource) {
      switch (building.resource) {
        case ResourcesEnum.FOOD: {
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
        case ResourcesEnum.GOLD:
          {
            if (building.isProducing) {
              const newGold =
                +resourcesState.gold +
                +populationState.amount *
                  +(resourcesState.bipPercentage / 100) *
                 +building.baseProductionRate!;
              dispatch(setGold(newGold));
            }
          }
          break;

        case ResourcesEnum.POPULATION:
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
                  newPopulation = +currentPopulation + +Math.ceil(growth);

                } else {
                  newPopulation = +currentPopulation + +Math.floor(growth);
                }
                if (newPopulation < 1) {
                  newPopulation = 1;
                }

                dispatch(setPopulation(newPopulation));
                // Population should not grow
              } else {
                const currentPopulation = populationState.amount;
                const growth =
                  ((currentPopulation * (populationState.satisfaction - 50)) /
                    100) *
                  populationState.baseGrowthRate;
                let newPopulation;

                if (growth > 0) {
                  newPopulation = +currentPopulation + +Math.ceil(growth);
                } else {
                  newPopulation = +currentPopulation + +Math.floor(growth);
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

            // //experimentel version
            // if (building.isProducing) {
            //   const currentPopulation = populationState.amount;
            //   // Berechne das Wachstum, aber begrenze den Effekt der Zufriedenheit
            //   const satisfactionEffect = Math.max(
            //     -0.5,
            //     Math.min(0.5, (populationState.satisfaction - 50) / 100)
            //   );

            //   const growth =
            //     currentPopulation *
            //     satisfactionEffect *
            //     populationState.baseGrowthRate;
            //   let newPopulation = +growth + +currentPopulation ;


            //   // Runde das Wachstum abhängig von der Richtung des Wachstums
            //   newPopulation =
            //     growth > 0
            //       ? Math.ceil(newPopulation)
            //       : Math.floor(newPopulation);

            //   // Stelle sicher, dass die Population nicht unter 1 fällt
            //   newPopulation = Math.max(newPopulation, 1);

            //   // Verhindere, dass die Population im nicht-Wachstumsfall zunimmt
            //   if (
            //     !populationState.isGrowing &&
            //     newPopulation > currentPopulation
            //   ) {
            //     newPopulation = currentPopulation;
            //   }

            //   dispatch(setPopulation(newPopulation));
            // }
          }
          break;

        case ResourcesEnum.SATISFACTION:
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

        case ResourcesEnum.WOOD:
          {
            if (building.isProducing) {
              const newWood =
                +resourcesState.wood +
                +populationState.amount *
                  +building.baseProductionRate! *
                  +(building.bipPercentage / 100);

              dispatch(setWood(newWood));
            }
          }
          break;
        case ResourcesEnum.STONE:
          {
            if (building.isProducing) {
              const newStone =
                +resourcesState.stone +
                +populationState.amount *
                  +building.baseProductionRate! *
                  +(building.bipPercentage / 100);

              dispatch(setStone(newStone));
            }
          }
          break;
        case ResourcesEnum.AMBER:
          {
            if (building.isProducing) {
              const newAmber =
                +resourcesState.amber +
                +populationState.amount *
                  +building.baseProductionRate! *
                  +(building.bipPercentage / 100);

              dispatch(setAmber(newAmber));
            }
          }
          break;

        case ResourcesEnum.TOOLS:
          {
            if (building.isProducing) {
              const newTools =
                +resourcesState.tools +
                +populationState.amount *
                  +building.baseProductionRate! *
                  +(building.bipPercentage / 100);

              dispatch(setTools(newTools));
            }
          }
          break;

        case ResourcesEnum.WEAPONS:
          {
            if (building.isProducing) {
              const newWeapons =
                +resourcesState.weapons +
                +populationState.amount *
                  +building.baseProductionRate! *
                  +(building.bipPercentage / 100);

              dispatch(setWeapons(newWeapons));
            }
          }
          break;

        default:
          break;
      }
    }
  };
