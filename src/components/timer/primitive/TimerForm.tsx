import { useState } from 'react';
import './TimerForm.css';
import Button from "./Button";
import Icon from '../../../assets/Clock.png';

type TimerFormProps = {
    onSubmit: (title: string, endTime: number, elapsedTime: number) => void;
};

const TimerForm = ({ onSubmit }: TimerFormProps) => {
    const [title, setTitle] = useState('');
    const [endTime, setEndTime] = useState(0);
    const [elapsedTime, setElapsedTime] = useState(0);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(title, endTime, elapsedTime);
    };

    return (
        <form className="timer-form" onSubmit={handleSubmit}>
            <div className={"clock-icon-container"}>
                <img src={Icon} alt={"Clock icon"}/>
            </div>
            <label>
                Title:
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required/>
            </label>
            <label>
                End Time (seconds):
                <input type="number" value={endTime} onChange={(e) => setEndTime(Number(e.target.value))} required/>
            </label>
            <label>
                Elapsed Time (seconds):
                <input type="number" value={elapsedTime} onChange={(e) => setElapsedTime(Number(e.target.value))} required/>
            </label>
            <Button type="submit">Set Timer</Button>
        </form>
    );
};

export default TimerForm;
