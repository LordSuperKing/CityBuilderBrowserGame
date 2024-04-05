import { Resources } from "../constants/enums";

export type BuildingData = {
    id: string;
    name: string;
    description: string;
    bipPercentage: number;
    resource?: Resources;
    baseProductionRate: number;
    imageSrc: string
}

export const buildingsData: BuildingData[] = [
  {
    id: "1",
    name: "Hunting and Gathering",
    description: "The foundation of food procurement in the Stone Age.",
    bipPercentage: 0,
    resource: Resources.FOOD,
    baseProductionRate: 1.1,
    imageSrc: "src/assets/images/economy/Food1.webp",
  },
  {
    id: "l100",
    name: "Jungle",
    description: "An untouched expanse ready for settlement.",
    bipPercentage: 0,
    baseProductionRate: 1.1,
    imageSrc: "src/assets/images/landscape/l1.webp",
  },
  {
    id: "l101",
    name: "River",
    description: "An untouched expanse ready for settlement.",
    bipPercentage: 0,
    baseProductionRate: 0,
    imageSrc: "src/assets/images/landscape/l2.webp",
  },
  {
    id: "l102",
    name: "Rocky Wilderness",
    description: "An untouched expanse ready for settlement.",
    bipPercentage: 0,
    baseProductionRate: 0,
    imageSrc: "src/assets/images/landscape/l3.webp",
  },
  {
    id: "l103",
    name: "Grassland",
    description: "An untouched expanse ready for settlement.",
    bipPercentage: 0,
    baseProductionRate: 0,
    imageSrc: "src/assets/images/landscape/l4.webp",
  },
  {
    id: "l104",
    name: "Lake",
    description: "An untouched expanse ready for settlement.",
    bipPercentage: 0,
    baseProductionRate: 0,
    imageSrc: "src/assets/images/landscape/l5.webp",
  },
];