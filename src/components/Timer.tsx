import React, { useState, useEffect } from 'react';
import './Timer.css';
import {buildStyles, CircularProgressbarWithChildren} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import useTimer from "../hooks/useTimer";

type TimerProps = {
    title: string,
    endTime: number,
    elapsedTime?: number
}

const Timer = ({ title, endTime, elapsedTime = 0 } : TimerProps) => {
    const { timeLeft,
            isRunning,
            isCompleted,
            startTimer,
            pauseTimer,
            resetTimer } = useTimer({ endTime, elapsedTime });

    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
    const seconds = String(timeLeft % 60).padStart(2, '0');

    const percentage = 100 - (timeLeft / endTime) * 100;

    return (
        <div className="timer-container">
            <CircularProgressbarWithChildren
                value={percentage}
                strokeWidth={5}
                styles={buildStyles({
                    pathColor: isCompleted ? '#cb6767' : '#67cb88',
                    textColor: '#ffffff',
                    trailColor: '#545576',
                })}
            >
                <div>
                    <p>{title}</p>
                    <h1>{minutes}:{seconds}</h1>
                    <p>{timeLeft} seconds left</p>
                </div>
            </CircularProgressbarWithChildren >

            <div className="buttons">
                <button onClick={startTimer} disabled={isRunning}>Start</button>
                <button onClick={pauseTimer} disabled={!isRunning}>Pause</button>
                <button onClick={resetTimer}>Reset</button>
            </div>
        </div>
    );
};

export default Timer;
