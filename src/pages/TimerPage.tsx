import React, { useState } from 'react';
import './Timerpage.css';
import TimerForm from "../components/timer-form/TimerForm";
import Timer from "../components/timer/Timer";
import ParticleBackground from "../components/shared/ParticlesBackground";

export default function TimerPage() {
    const [timerProps, setTimerProps] = useState({ title: 'Title from Props', endTime: 10, elapsedTime: 3 });
    const [timerKey, setTimerKey] = useState(0);

    const handleFormSubmit = (title: string, endTime: number, elapsedTime: number) => {
        setTimerProps({ title, endTime, elapsedTime });
        setTimerKey((prevKey) => prevKey + 1);
    };

    return (
        <div id="timer-page">
            <ParticleBackground></ParticleBackground>
            <TimerForm onSubmit={handleFormSubmit} />
            <Timer key={timerKey} {...timerProps} />
        </div>
    );
}
