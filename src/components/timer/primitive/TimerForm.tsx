import { useState } from 'react';
import './TimerForm.css';
import Button from "../../shared/Button";
import Icon from '../../../assets/Clock.png';
import {Input, Slider, TextField} from '@mui/material';

type TimerFormProps = {
    onChange: (title: string, endTime: number, elapsedTime: number) => void;
};

const TimerForm = ({ onChange }: TimerFormProps) => {
    const [title, setTitle] = useState('');
    const [endTime, setEndTime] = useState(0);
    const [elapsedTime, setElapsedTime] = useState(0);

    const handleSubmit = () => {
        onChange(title, endTime, elapsedTime);
    };

    return (
        <div className={"form-container"}>
            <div className={"clock-icon-container"}>
                <img src={Icon} alt={"Clock icon"} />
            </div>
            <TextField id="standard-basic" fullWidth={true} label="Title" variant="standard" value={title} onChange={(e) => {setTitle(e.target.value);}}  />
            <p>End Time (seconds):</p>
            <Slider aria-label={"End time (seconds)"} size="small" defaultValue={endTime} value={endTime} min={0} max={3600}
                valueLabelDisplay="auto"
                onChange={(e, value) => {setEndTime(value as number);}}
            />
            <p>Elapsed Time (seconds):</p>
            <Slider size="small" defaultValue={elapsedTime} value={elapsedTime} min={0} max={3600} // Assuming elapsedTime cannot exceed endTime
                valueLabelDisplay="auto"
                onChange={(e, value) => {setElapsedTime(value as number);}}
            />
            <Button onClick={handleSubmit}>Set</Button>

        </div>
    );
};

export default TimerForm;
