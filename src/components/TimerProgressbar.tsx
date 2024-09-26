import { buildStyles, CircularProgressbarWithChildren } from "react-circular-progressbar";
import React from "react";

const TimerProgressbar: React.FC<TimerProgressbarProps> = ({ title, endTime, timeLeft }) => {
    const percentage = 100 - (timeLeft / endTime) * 100;
    const pathColor = timeLeft === 0 ? '#cb6767' : '#67cb88';

    return (
        <CircularProgressbarWithChildren
            value={percentage}
            strokeWidth={5}
            styles={buildStyles({
                pathColor,
                textColor: '#ffffff',
                trailColor: '#545576',
            })}
        >
            <div>
                <p>{title}</p>
                <h1>{formatTime(endTime - timeLeft)}</h1>
                <p>{formatTime(timeLeft)} left</p>
            </div>
        </CircularProgressbarWithChildren>
    );
};

export default TimerProgressbar;

type TimerProgressbarProps = {
    title: string;
    endTime: number;
    timeLeft: number;
}

const formatTime = (time: number) : string => {
    const minutes = String(Math.floor(time / 60)).padStart(2, '0');
    const seconds = String(time % 60).padStart(2, '0');
    return  minutes + ':' + seconds;
};

