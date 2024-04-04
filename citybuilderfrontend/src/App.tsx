import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { GameScreen } from "./screens/GameScreen";
import { useAppDispatch } from "./redux/reduxHooks";
import { startPopulationGrowth } from "./redux/populationSlice";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(startPopulationGrowth());
  }, [dispatch]);

  return (
    <>
      <GameScreen></GameScreen>
    </>
  );
}

export default App;
