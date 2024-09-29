import React, { useState } from 'react';
import './Timerpage.css';
import TimerForm from "../components/timer/primitive/TimerForm";
import Timer from "../components/timer/Timer";
import ParticleBackground from "../components/timer/primitive/ParticlesBackground";

export default function TimerPage() {
    const [timerProps, setTimerProps] = useState({ title: '', endTime: 0, elapsedTime: 0 });

    const handleFormSubmit = (title: string, endTime: number, elapsedTime: number) => {
        setTimerProps({ title, endTime, elapsedTime });
    };

    return (
        <div id="timer-page">
            <ParticleBackground></ParticleBackground>
            <TimerForm onSubmit={handleFormSubmit} />
            <Timer {...timerProps} />
        </div>
    );
}
