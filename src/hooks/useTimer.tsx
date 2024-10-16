import { useState, useEffect } from 'react';

type UseTimerProps = {
    endTime: number;
    elapsedTime?: number;
};

const useTimer = ({ endTime, elapsedTime = 0 }: UseTimerProps) => {
    const [timeLeft, setTimeLeft] = useState(endTime - elapsedTime);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        setTimeLeft(endTime - elapsedTime);

    }, [endTime, elapsedTime]);

    useEffect(() => {
        let timer: NodeJS.Timeout | undefined;

        if (isRunning && timeLeft > 0) {
            timer = setInterval(() => setTimeLeft(prev => prev - 0.1), 100);
        } else if (timeLeft <= 0) {
            setIsRunning(false);
        }

        return () => clearInterval(timer);
    }, [isRunning, timeLeft]);

    const startTimer = () => setIsRunning(true);
    const pauseTimer = () => setIsRunning(false);
    const resetTimer = () => {
        setTimeLeft(endTime);
        setIsRunning(false);
    };

    return { timeLeft, isRunning, startTimer, pauseTimer, resetTimer };
};

export default useTimer;
