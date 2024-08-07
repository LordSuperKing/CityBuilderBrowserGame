import { ResourcesEnum } from "../constants/enums";
import { Resources } from "../redux/resourcesSlice";
import food1 from "../../public/images/economy/food1.webp"

export type BuildingData = {
  id: string;
  name: string;
  description: string;
  bipPercentage: number;
  resource?: ResourcesEnum;
  baseProductionRate?: number;
  isProducing: boolean;
  imageSrc: string;
  isUpgradeAvailable: boolean;
  upgradeAbleTo: string;
  upgradeCosts: Resources;
};

export const allBuildingsData: BuildingData[] = [
  {
    id: "1",
    name: "Hunting and Gathering",
    description: "The foundation of food procurement in the Stone Age.",
    bipPercentage: 0,
    resource: ResourcesEnum.FOOD,
    baseProductionRate: 1.1,
    isProducing: import.meta.env.VITE_BUILDING_1_IS_PRODUCING === "true",
    imageSrc: food1,
    isUpgradeAvailable: Boolean(
      import.meta.env.VITE_BUILDING_1_IS_UPGRADE_AVAILABLE === "true"
    ),
    upgradeAbleTo: "f2",
    upgradeCosts: {
      food: 0,
      gold: 4,
      wood: 4,
      stone: 4,
      amber: 4,
      tools: 7,
      weapons: 0,
    },
  },

  {
    id: "l100",
    name: "Jungle",
    description: "An untouched expanse ready for settlement.",
    bipPercentage: 0,
    isProducing: import.meta.env.VITE_BUILDING_l100_IS_PRODUCING === "true",
    imageSrc: "/images/landscape/l1.webp",
    isUpgradeAvailable:
      import.meta.env.VITE_BUILDING_l100_IS_UPGRADE_AVAILABLE === "true",
    upgradeAbleTo: "5",
    upgradeCosts: {
      food: 0,
      gold: 2,
      wood: 0,
      stone: 0,
      amber: 0,
      tools: 0,
      weapons: 0,
    },
  },
  {
    id: "l102",
    name: "Rocky Wilderness",
    description: "An untouched expanse ready for settlement.",
    bipPercentage: 0,
    isProducing: import.meta.env.VITE_BUILDING_l102_IS_PRODUCING === "true",
    imageSrc: "/images/landscape/l3.webp",
    isUpgradeAvailable:
      import.meta.env.VITE_BUILDING_l102_IS_UPGRADE_AVAILABLE === "true",
    upgradeAbleTo: "6",
    upgradeCosts: {
      food: 0,
      gold: 2,
      wood: 2,
      stone: 0,
      amber: 0,
      tools: 0,
      weapons: 0,
    },
  },
  {
    id: "l101",
    name: "River",
    description: "An untouched expanse ready for settlement.",
    bipPercentage: 0,
    isProducing: import.meta.env.VITE_BUILDING_l101_IS_PRODUCING === "true",
    imageSrc: "/images/landscape/l2.webp",
    isUpgradeAvailable:
      import.meta.env.VITE_BUILDING_l101_IS_UPGRADE_AVAILABLE === "true",
    upgradeAbleTo: "7",
    upgradeCosts: {
      food: 0,
      gold: 2,
      wood: 2,
      stone: 2,
      amber: 0,
      tools: 0,
      weapons: 0,
    },
  },
  {
    id: "l104",
    name: "Lake",
    description: "An untouched expanse ready for settlement.",
    bipPercentage: 0,
    isProducing: import.meta.env.VITE_BUILDING_l104_IS_PRODUCING === "true",
    imageSrc: "/images/landscape/l5.webp",
    isUpgradeAvailable:
      import.meta.env.VITE_BUILDING_l104_IS_UPGRADE_AVAILABLE === "true",
    upgradeAbleTo: "8",
    upgradeCosts: {
      food: 0,
      gold: 2,
      wood: 2,
      stone: 2,
      amber: 2,
      tools: 0,
      weapons: 0,
    },
  },
  {
    id: "l103",
    name: "Grassland",
    description: "An untouched expanse ready for settlement.",
    bipPercentage: 0,
    isProducing: import.meta.env.VITE_BUILDING_l103_IS_PRODUCING === "true",
    imageSrc: "/images/landscape/l4.webp",
    isUpgradeAvailable:
      import.meta.env.VITE_BUILDING_l103_IS_UPGRADE_AVAILABLE === "true",
    upgradeAbleTo: "9",
    upgradeCosts: {
      food: 0,
      gold: 2,
      wood: 2,
      stone: 2,
      amber: 2,
      tools: 2,
      weapons: 0,
    },
  },
  {
    id: "2",
    name: "Bank",
    description: "Here is your money.",
    bipPercentage: 0,
    resource: ResourcesEnum.GOLD,
    baseProductionRate: 0.01,
    isProducing: import.meta.env.VITE_BUILDING_2_IS_PRODUCING === "true",
    imageSrc: "",
    isUpgradeAvailable:
      import.meta.env.VITE_BUILDING_2_IS_UPGRADE_AVAILABLE === "true",
    upgradeAbleTo: "",
    upgradeCosts: {
      food: 0,
      gold: 0,
      wood: 0,
      stone: 0,
      amber: 0,
      tools: 0,
      weapons: 0,
    },
  },
  {
    id: "3",
    name: "Population",
    description: "Base building for population",
    bipPercentage: 0,
    resource: ResourcesEnum.POPULATION,
    baseProductionRate: 0.01,
    isProducing: import.meta.env.VITE_BUILDING_3_IS_PRODUCING === "true",
    imageSrc: "",
    isUpgradeAvailable:
      import.meta.env.VITE_BUILDING_3_IS_UPGRADE_AVAILABLE === "true",
    upgradeAbleTo: "",
    upgradeCosts: {
      food: 0,
      gold: 0,
      wood: 0,
      stone: 0,
      amber: 0,
      tools: 0,
      weapons: 0,
    },
  },
  {
    id: "4",
    name: "Satisfaction",
    description: "Base building for Satisfaction",
    bipPercentage: 0,
    resource: ResourcesEnum.SATISFACTION,
    baseProductionRate: 1,
    isProducing: import.meta.env.VITE_BUILDING_4_IS_PRODUCING === "true",
    imageSrc: "",
    isUpgradeAvailable:
      import.meta.env.VITE_BUILDING_4_IS_UPGRADE_AVAILABLE === "true",
    upgradeAbleTo: "",
    upgradeCosts: {
      food: 0,
      gold: 0,
      wood: 0,
      stone: 0,
      amber: 0,
      tools: 0,
      weapons: 0,
    },
  },
  {
    id: "5",
    name: "Wood",
    description: "Wood Production",
    bipPercentage: 0,
    resource: ResourcesEnum.WOOD,
    baseProductionRate: 0.01,
    isProducing: import.meta.env.VITE_BUILDING_5_IS_PRODUCING === "true",
    imageSrc: "/images/economy/wood1.webp",
    isUpgradeAvailable:
      import.meta.env.VITE_BUILDING_5_IS_UPGRADE_AVAILABLE === "true",
    upgradeAbleTo: "",
    upgradeCosts: {
      food: 0,
      gold: 0,
      wood: 0,
      stone: 0,
      amber: 0,
      tools: 0,
      weapons: 0,
    },
  },
  {
    id: "6",
    name: "Stone",
    description: "Stone Production",
    bipPercentage: 0,
    resource: ResourcesEnum.STONE,
    baseProductionRate: 0.01,
    isProducing: import.meta.env.VITE_BUILDING_6_IS_PRODUCING === "true",
    imageSrc: "/images/economy/stone1.webp",
    isUpgradeAvailable:
      import.meta.env.VITE_BUILDING_6_IS_UPGRADE_AVAILABLE === "true",
    upgradeAbleTo: "",
    upgradeCosts: {
      food: 0,
      gold: 0,
      wood: 0,
      stone: 0,
      amber: 0,
      tools: 0,
      weapons: 0,
    },
  },
  {
    id: "7",
    name: "Amber",
    description: "Amber Production",
    bipPercentage: 0,
    resource: ResourcesEnum.AMBER,
    baseProductionRate: 0.01,
    isProducing: import.meta.env.VITE_BUILDING_7_IS_PRODUCING === "true",
    imageSrc: "/images/economy/amber1.webp",
    isUpgradeAvailable:
      import.meta.env.VITE_BUILDING_7_IS_UPGRADE_AVAILABLE === "true",
    upgradeAbleTo: "",
    upgradeCosts: {
      food: 0,
      gold: 0,
      wood: 0,
      stone: 0,
      amber: 0,
      tools: 0,
      weapons: 0,
    },
  },
  {
    id: "8",
    name: "Tools",
    description: "Tool Production",
    bipPercentage: 0,
    resource: ResourcesEnum.TOOLS,
    baseProductionRate: 0.01,
    isProducing: import.meta.env.VITE_BUILDING_8_IS_PRODUCING === "true",
    imageSrc: "/images/economy/toolproduction1.webp",
    isUpgradeAvailable:
      import.meta.env.VITE_BUILDING_8_IS_UPGRADE_AVAILABLE === "true",
    upgradeAbleTo: "",
    upgradeCosts: {
      food: 0,
      gold: 0,
      wood: 0,
      stone: 0,
      amber: 0,
      tools: 0,
      weapons: 0,
    },
  },
  {
    id: "9",
    name: "Weapons",
    description: "Weapon Production",
    bipPercentage: 0,
    resource: ResourcesEnum.WEAPONS,
    baseProductionRate: 0.01,
    isProducing: import.meta.env.VITE_BUILDING_9_IS_PRODUCING === "true",
    imageSrc: "/images/economy/weaponproduction1.webp",
    isUpgradeAvailable:
      import.meta.env.VITE_BUILDING_9_IS_UPGRADE_AVAILABLE === "true",
    upgradeAbleTo: "",
    upgradeCosts: {
      food: 0,
      gold: 0,
      wood: 0,
      stone: 0,
      amber: 0,
      tools: 0,
      weapons: 0,
    },
  },
  {
    id: "f2",
    name: "Fishing",
    description: "",
    bipPercentage: 0,
    resource: ResourcesEnum.FOOD,
    baseProductionRate: 1.2,
    isProducing: import.meta.env.VITE_BUILDING_F2_IS_PRODUCING === "true",
    imageSrc: "/images/economy/food2.webp",
    isUpgradeAvailable:
      import.meta.env.VITE_BUILDING_F2_IS_UPGRADE_AVAILABLE === "true",
    upgradeAbleTo: "f3",
    upgradeCosts: {
      food: 0,
      gold: 7,
      wood: 7,
      stone: 7,
      amber: 7,
      tools: 7,
      weapons: 10,
    },
  },
  {
    id: "f3",
    name: "Mammuts",
    description: "",
    bipPercentage: 0,
    resource: ResourcesEnum.FOOD,
    baseProductionRate: 1.3,
    isProducing: import.meta.env.VITE_BUILDING_F3_IS_PRODUCING === "true",
    imageSrc: "/images/economy/food3.webp",
    isUpgradeAvailable:
      import.meta.env.VITE_BUILDING_F3_IS_UPGRADE_AVAILABLE === "true",
    upgradeAbleTo: "",
    upgradeCosts: {
      food: 0,
      gold: 2,
      wood: 2,
      stone: 2,
      amber: 2,
      tools: 2,
      weapons: 5,
    },
  },
];
