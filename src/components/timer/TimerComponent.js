import React, { useState, useEffect } from 'react';
import './TimerComponent.css';
import {buildStyles, CircularProgressbarWithChildren} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const TimerComponent = ({ title, endTime, elapsedTime = 0 }) => {
    const [timeLeft, setTimeLeft] = useState(endTime - elapsedTime);
    const [isRunning, setIsRunning] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);

    useEffect(() => {
        let timer;
        if (isRunning && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft <= 0 && isRunning) {
            setIsCompleted(true);
            setIsRunning(false);
        }
        return () => clearInterval(timer);
    }, [isRunning, timeLeft]);

    // Start, pause, and reset functions
    const startTimer = () => setIsRunning(true);
    const pauseTimer = () => setIsRunning(false);
    const resetTimer = () => {
        setTimeLeft(endTime);
        setIsRunning(false);
        setIsCompleted(false);
    };

    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
    const seconds = String(timeLeft % 60).padStart(2, '0');

    const percentage = 100 - (timeLeft / endTime) * 100;

    return (
        <div className="timer-container">
            <h3>{title}</h3>
            <CircularProgressbarWithChildren
                value={percentage}
                styles={buildStyles({
                    pathColor: isCompleted ? '#cb6767' : '#67cb88',
                    textColor: '#ffffff',
                    trailColor: '#545576',
                })}
            >
                <div>
                    <p>{title}</p>
                    <p>{minutes}:{seconds}</p>
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

export default TimerComponent;
