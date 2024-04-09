// GameSpeedComponent.js
import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../redux/reduxHooks';
import { startGame, stopGame } from '../../GameLogic';
import { GameSpeedSlider } from './GameSpeedSlider';

export function GameSpeedComponent() {
  const dispatch = useAppDispatch();
  const isGameRunning = useAppSelector((state) => state.settings.isGameRunning);

  function toggleStartStop() {
    if (isGameRunning) {
      dispatch(stopGame());
    } else {
      dispatch(startGame());
    }
  }

  return (
    <Container className='ms-3 p-1 '>
      <Button className='btn-sm  ' style={{ width: "100px"}} onClick={toggleStartStop}>
        {isGameRunning ? 'Pause' : 'Play'}
      </Button>
      <GameSpeedSlider></GameSpeedSlider>
    </Container>
  );
}
