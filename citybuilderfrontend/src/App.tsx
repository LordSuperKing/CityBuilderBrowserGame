import { useEffect, useState } from "react";
import { GameScreen } from "./screens/GameScreen";
import { useAppDispatch } from "./redux/reduxHooks";
import { startGame } from "./GameLogic";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(startGame())
  }, [dispatch]);

  return (
    <>
      <GameScreen></GameScreen>
    </>
  );
}

export default App;
