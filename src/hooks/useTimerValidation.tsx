import { useEffect, useState } from 'react';
import { TimerValidator } from '../utils/TimerValidation';

const useTimerValidation = (endTime: number, elapsedTime: number | undefined, title: string) => {
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        try {
            TimerValidator.validateTitle(title);
            TimerValidator.validateTimes(endTime, elapsedTime);
            setError(null);
        } catch (err) {
            setError((err as Error).message);
        }
    }, [endTime, elapsedTime, title]);

    return error;
};

export default useTimerValidation;
