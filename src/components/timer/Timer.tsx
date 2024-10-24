import React from 'react';
import './Timer.css';
import 'react-circular-progressbar/dist/styles.css';
import useTimer from "../../hooks/useTimer";
import Progressbar from "./Progressbar";
import Button from "../shared/Button";
import useTimerValidation from "../../hooks/useTimerValidation";
import ErrorAnimation from "./primitive/ErrorAnimation";

type TimerProps = {
    title: string, // Label for the timer.
    endTime: number, // Target time for the timer to finish (in seconds).
    elapsedTime?: number // Optional: Time already passed (in s), default is 0.
}

const Timer = ({ title, endTime, elapsedTime = 0 }: TimerProps) => {
    const validationError = useTimerValidation(endTime, elapsedTime, title);

    const { timeLeft, isRunning, startTimer, pauseTimer, resetTimer } = useTimer({ endTime, elapsedTime });

    if (validationError){
        return (
            <div className="timer-container">
                <div className="error-message">{validationError}
                    <ErrorAnimation/>
                </div>
            </div>
        );
    }
    return (
        <div className="timer-container">
            <Progressbar title={title} endTime={endTime} timeLeft={timeLeft}/>
            <div className="buttons">
                <Button onClick={startTimer} disabled={isRunning}>Start</Button>
                <Button onClick={pauseTimer} disabled={!isRunning}>Pause</Button>
                <Button onClick={resetTimer}>Reset</Button>
            </div>
        </div>
    );
};
export default Timer;
