import { useEffect, useState } from "react";
import { GameScreen } from "./screens/GameScreen";
import { useAppDispatch } from "./redux/reduxHooks";
import { GameLogic } from "./GameLogic";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(GameLogic())
  }, [dispatch]);

  return (
    <>
      <GameScreen></GameScreen>
    </>
  );
}

export default App;
