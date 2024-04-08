import { Resources } from "../constants/enums";

export type BuildingData = {
    id: string;
    name: string;
    description: string;
    bipPercentage: number;
    resource?: Resources;
    baseProductionRate?: number;
    isProducing: boolean;
    imageSrc: string
}

export const allBuildingsData: BuildingData[] = [
  {
    id: "1",
    name: "Hunting and Gathering",
    description: "The foundation of food procurement in the Stone Age.",
    bipPercentage: 0,
    resource: Resources.FOOD,
    baseProductionRate: 1.1,
    isProducing: true,
    imageSrc: "src/assets/images/economy/Food1.webp",
  },
  {
    id: "l100",
    name: "Jungle",
    description: "An untouched expanse ready for settlement.",
    bipPercentage: 0,
    isProducing: false,
    imageSrc: "src/assets/images/landscape/l1.webp",
  },
  {
    id: "l101",
    name: "River",
    description: "An untouched expanse ready for settlement.",
    bipPercentage: 0,
    isProducing: false,
    imageSrc: "src/assets/images/landscape/l2.webp",
  },
  {
    id: "l102",
    name: "Rocky Wilderness",
    description: "An untouched expanse ready for settlement.",
    bipPercentage: 0,
    isProducing: false,
    imageSrc: "src/assets/images/landscape/l3.webp",
  },
  {
    id: "l103",
    name: "Grassland",
    description: "An untouched expanse ready for settlement.",
    bipPercentage: 0,
    isProducing: false,
    imageSrc: "src/assets/images/landscape/l4.webp",
  },
  {
    id: "l104",
    name: "Lake",
    description: "An untouched expanse ready for settlement.",
    bipPercentage: 0,
    isProducing: false,
    imageSrc: "src/assets/images/landscape/l5.webp",
  },
  {
    id: "2",
    name: "Bank",
    description: "Here is your money.",
    bipPercentage: 0,
    resource: Resources.GOLD,
    baseProductionRate: 0.01,
    isProducing: true,
    imageSrc: "",
  },
  {
    id: "3",
    name: "Population",
    description: "Base building for population",
    bipPercentage: 0,
    resource: Resources.POPULATION,
    baseProductionRate: 0.01,
    isProducing: true,
    imageSrc: "",
  },
  {
    id: "4",
    name: "Satisfaction",
    description: "Base building for Satisfaction",
    bipPercentage: 0,
    resource: Resources.SATISFACTION,
    baseProductionRate: 1,
    isProducing: true,
    imageSrc: "",
  },
];