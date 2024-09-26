import React from 'react';
import './Timer.css';
import 'react-circular-progressbar/dist/styles.css';
import useTimer from "../hooks/useTimer";
import TimerProgressbar from "./TimerProgressbar";

type TimerProps = {
    title: string,
    endTime: number,
    elapsedTime?: number
}

const Timer = ({ title, endTime, elapsedTime = 0 } : TimerProps) => {
    const { timeLeft,
            isRunning,
            startTimer,
            pauseTimer,
            resetTimer } = useTimer({ endTime, elapsedTime });

    return (
        <div className="timer-container">
            <TimerProgressbar title={title} endTime={endTime} timeLeft={timeLeft}/>
            <div className="buttons">
                <button onClick={startTimer} disabled={isRunning}>Start</button>
                <button onClick={pauseTimer} disabled={!isRunning}>Pause</button>
                <button onClick={resetTimer}>Reset</button>
            </div>
        </div>
    );
};

export default Timer;
