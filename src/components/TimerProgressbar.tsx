import { buildStyles, CircularProgressbarWithChildren } from "react-circular-progressbar";
import React from "react";
import './TimerProgressbar.css'

const TimerProgressbar: React.FC<TimerProgressbarProps> = ({ title, endTime, timeLeft }) => {
    const percentage = 100 - (timeLeft / endTime) * 100;

    return (
        <CircularProgressbarWithChildren
            value={percentage}
            strokeWidth={5}
            styles={buildStyles({
                pathColor: timeLeft === 0 ? 'url(#color-shift)' : '#67cb88',  // Use animated gradient when timeLeft is 0
                textColor: '#ffffff',
                trailColor: '#545576',
            })}
        >
            <div>
                <p>{title}</p>
                <h1>{formatTime(endTime - timeLeft)}</h1>
                <p>{formatTime(timeLeft)} left</p>
            </div>

            {timeLeft === 0 && (
                <svg id="color-shift-svg">
                    <defs>
                        <linearGradient id="color-shift" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#67cb88">
                                <animate
                                    attributeName="stop-color"
                                    values="#67cb88;#cb6767;#67cb88"
                                    dur="2s"
                                    repeatCount="indefinite"
                                />
                            </stop>
                            <stop offset="100%" stopColor="#cb6767">
                                <animate
                                    attributeName="stop-color"
                                    values="#cb6767;#67cb88;#cb6767"
                                    dur="2s"
                                    repeatCount="indefinite"
                                />
                            </stop>
                        </linearGradient>
                    </defs>
                </svg>
            )}
        </CircularProgressbarWithChildren>
    );
};

export default TimerProgressbar;

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
