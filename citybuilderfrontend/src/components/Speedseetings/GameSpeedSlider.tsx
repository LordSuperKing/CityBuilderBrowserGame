import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useAppDispatch, useAppSelector } from '../../redux/reduxHooks';
import { setGameSpeed } from '../../redux/settingsSlice';
import { startGame, stopGame } from '../../GameLogic';

export function GameSpeedSlider() {
    const dispatch = useAppDispatch();
    const gameSpeed = useAppSelector((state) => state.settings.gameSpeed);

    const min = 3000;
    const max = 50;

    const handleSliderChange = (value: any) => {
        const reversedValue = min - value + max;
        dispatch(stopGame())
        dispatch(setGameSpeed(reversedValue));
        dispatch(startGame())
    };

    return (
            <Slider className='ms-3'
                min={max}
                max={min}
                value={min - gameSpeed + max}
                onChange={handleSliderChange}
                trackStyle={{ backgroundColor: 'blue', height: 10 }}
                handleStyle={{
                    borderColor: 'blue',
                    height: 28,
                    width: 28,
                    marginLeft: -14,
                    marginTop: -9,
                    backgroundColor: 'black',
                }}
                railStyle={{ backgroundColor: 'red', height: 10 }}
            />
    );
}
