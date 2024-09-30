import React from 'react';
import './Timer.css';
import 'react-circular-progressbar/dist/styles.css';
import useTimer from "../../hooks/useTimer";
import Progressbar from "./Progressbar";
import Button from "./primitive/Button";
import useTimerValidation from "../../hooks/useTimerValidation";
import ErrorAnimation from "./primitive/ErrorAnimation";

type TimerProps = {
    title: string,
    endTime: number,
    elapsedTime?: number
}

const Timer = ({ title, endTime, elapsedTime = 0 }: TimerProps) => {
    const validationError = useTimerValidation(endTime, elapsedTime);
    const { timeLeft, isRunning, startTimer, pauseTimer, resetTimer } = useTimer({ endTime, elapsedTime });
    return (
        <div className="timer-container">
            {validationError && <div className="error-message">{validationError}<ErrorAnimation /></div>}
            {!validationError && (
                <>
                    <Progressbar title={title} endTime={endTime} timeLeft={timeLeft}/>
                    <div className="buttons">
                        <Button onClick={startTimer} disabled={isRunning}>Start</Button>
                        <Button onClick={pauseTimer} disabled={!isRunning}>Pause</Button>
                        <Button onClick={resetTimer}>Reset</Button>
                    </div>
                </>
            )}
        </div>
    );
};
export default Timer;
