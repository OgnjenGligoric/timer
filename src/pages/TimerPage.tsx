import React, { useState } from 'react';
import './Timerpage.css';
import TimerForm from "../components/timer/primitive/TimerForm";
import Timer from "../components/timer/Timer";
import ParticleBackground from "../components/timer/primitive/ParticlesBackground";

export default function TimerPage() {
    const [timerProps, setTimerProps] = useState({ title: 'Title from Props', endTime: 25*60, elapsedTime: 5*60+7 });
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
