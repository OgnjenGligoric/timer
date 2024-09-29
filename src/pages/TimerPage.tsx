import { useState } from 'react';
import TimerComponent from "../components/timer/Timer";
import './Timerpage.css';
import TimerForm from "../components/timer/primitive/TimerForm";
import ErrorBoundary from "../utils/ErrorBoundary";

export default function TimerPage() {
    const [timerProps, setTimerProps] = useState({ title: '', endTime: 0, elapsedTime: 0 });

    const handleFormSubmit = (title: string, endTime: number, elapsedTime: number) => {
        setTimerProps({ title, endTime, elapsedTime });
    };

    return (
        <ErrorBoundary >
            <TimerForm onSubmit={handleFormSubmit} />
            <TimerComponent endTime={3} title={"Something"} elapsedTime={315} />
        </ErrorBoundary>
    );
}
