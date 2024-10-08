import { buildStyles, CircularProgressbarWithChildren } from "react-circular-progressbar";
import React from "react";
import './Progressbar.css'
import ColorShiftAnimation from "./primitive/ColorShiftAnimation";

const Progressbar: React.FC<TimerProgressbarProps> = ({ title, endTime, timeLeft }) => {
    const percentage = 100 - (timeLeft / endTime) * 100;
    const isCompleted = percentage >= 100;

    return (
        <CircularProgressbarWithChildren value={percentage} strokeWidth={4}
            styles={buildStyles({pathColor: isCompleted ? 'url(#color-shift)' : '#67cb88', trailColor: '#545576'})}>

            <div className="progressbar-content">
                <p>{title}</p>
                <h1>{formatTime(endTime - timeLeft)}</h1>
                <p>{formatTime(timeLeft)} left</p>
            </div>

            {isCompleted && (<ColorShiftAnimation/>)}

        </CircularProgressbarWithChildren>
    );
};

export default Progressbar;

type TimerProgressbarProps = {
    title: string;
    endTime: number;
    timeLeft: number;
}

const capAtZero = (value: number): number => {
    return value < 0 ? 0 : value;
};

const roundToOneDecimal = (value: number): number => {
    return Math.round(value);
};

const formatTime = (timeInSeconds: number): string => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;

    const formattedMinutes = String(capAtZero(minutes)).padStart(2, '0');
    const formattedSeconds = String(capAtZero(roundToOneDecimal(seconds))).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
};

