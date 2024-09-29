import { buildStyles, CircularProgressbarWithChildren } from "react-circular-progressbar";
import React from "react";
import './Progressbar.css'
import ColorShiftAnimation from "./primitive/ColorShiftAnimation";

const Progressbar: React.FC<TimerProgressbarProps> = ({ title, endTime, timeLeft }) => {
    const percentage = 100 - (timeLeft / endTime) * 100;
    const isCompleted = percentage === 100;

    return (
        <CircularProgressbarWithChildren
            value={percentage}
            strokeWidth={4}
            styles={buildStyles({
                pathColor: isCompleted ? 'url(#color-shift)' : '#67cb88',  // Use animated gradient when timeLeft is 0
                textColor: '#ffffff',
                trailColor: '#545576',
        })}>
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

const formatTime = (time: number): string => {
    const minutes = String(Math.floor(time / 60)).padStart(2, '0');
    const seconds = String(time % 60).padStart(2, '0');
    return minutes + ':' + seconds;
};