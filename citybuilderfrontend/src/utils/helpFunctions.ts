import { Resources } from "../redux/resourcesSlice";

export const checkSufficientResources = (
  resourcesState: Resources,
  upgradeCosts: Resources
) => {
    return  resourcesState.food >= upgradeCosts.food &&
    resourcesState.gold >= upgradeCosts.gold &&
    resourcesState.stone >= upgradeCosts.stone &&
    resourcesState.wood >= upgradeCosts.wood &&
    resourcesState.amber >= upgradeCosts.amber &&
    resourcesState.tools >= upgradeCosts.tools &&
    resourcesState.weapons >= upgradeCosts.weapons 

};
