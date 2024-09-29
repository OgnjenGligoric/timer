import { useEffect, useState } from 'react';
import { TimerValidator } from '../utils/TimerValidation';

const useTimerValidation = (endTime: number, elapsedTime: number) => {
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        try {
            TimerValidator.validateTimes(endTime, elapsedTime);
            setError(null);
        } catch (err) {
            setError((err as Error).message);
        }
    }, [endTime, elapsedTime]);

    return error;
};

export default useTimerValidation;
