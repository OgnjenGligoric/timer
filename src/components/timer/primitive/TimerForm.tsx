import { useState } from 'react';
import './TimerForm.css';
import Button from "../../shared/Button";
import Icon from '../../../assets/Clock.png';
import { TextField } from '@mui/material';
import { MobileTimePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Theme from "../../shared/Theme";
import dayjs from 'dayjs';

type TimerFormProps = {
    onChange: (title: string, endTime: number, elapsedTime: number) => void;
};

const TimerForm = ({ onChange }: TimerFormProps) => {
    const [title, setTitle] = useState<string>('');
    const [endTime, setEndTime] = useState<number>(0);
    const [elapsedTime, setElapsedTime] = useState<number>(0);

    const commonSx = {
        '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: '#606170' },
            '&:hover fieldset': { borderColor: '#c2c2c2' },
            '&.Mui-focused fieldset': { borderColor: '#c2c2c2' },
        },
    };

    const secondsToDayjs = (timeInSeconds: number) =>
        dayjs().minute(Math.floor(timeInSeconds / 60)).second(timeInSeconds % 60);

    const handleTimeChange = (value: dayjs.Dayjs | null, setter: (time: number) => void) => {
        if (value) setter(value.minute() * 60 + value.second());
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Theme>
                <div className="form-container">
                    <div className="clock-icon-container">
                        <img src={Icon} alt="Clock icon" />
                    </div>
                    <TextField fullWidth label="Title" value={title} sx={commonSx}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <div className="timer-input-container">
                        <div>
                            <p>End Time</p>
                            <MobileTimePicker views={['minutes', 'seconds']} format="mm:ss" sx={{ width: '100%', ...commonSx }}
                                value={secondsToDayjs(endTime)}
                                onChange={(newValue) => handleTimeChange(newValue, setEndTime)}
                            />
                        </div>
                        <div>
                            <p>Elapsed Time</p>
                            <MobileTimePicker views={['minutes', 'seconds']} format="mm:ss" sx={{ width: '100%', ...commonSx }}
                                value={secondsToDayjs(elapsedTime)}
                                onChange={(newValue) => handleTimeChange(newValue, setElapsedTime)}
                            />
                        </div>
                    </div>
                    <Button onClick={() => onChange(title, endTime, elapsedTime)}>Set</Button>
                </div>
            </Theme>
        </LocalizationProvider>
    );
};

export default TimerForm;
