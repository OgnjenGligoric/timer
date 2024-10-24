import { useState } from 'react';
import './TimerForm.css';
import Button from "../shared/Button";
import Icon from '../../assets/Clock.png';
import { TextField } from '@mui/material';
import { MobileTimePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Theme from "../shared/Theme";
import dayjs from 'dayjs';

type TimerFormProps = {
    onSubmit: (title: string, 
               endTime: number,
               elapsedTime: number) => void;
};

const TimerForm = ({ onSubmit }: TimerFormProps) => {
    const [title, setTitle] = useState<string>('Title from Props');
    const [endTime, setEndTime] = useState<number>(10);
    const [elapsedTime, setElapsedTime] = useState<number>(3);

    const inputCommonSx = {
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
                    <TextField fullWidth label="Title" value={title} sx={inputCommonSx}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <div className="timer-input-container">
                        <div>
                            <p>End Time</p>
                            <MobileTimePicker views={['minutes', 'seconds']} format="mm:ss" sx={{ width: '100%', ...inputCommonSx }}
                                value={secondsToDayjs(endTime)}
                                onChange={(newValue) => handleTimeChange(newValue, setEndTime)}
                            />
                        </div>
                        <div>
                            <p>Elapsed Time</p>
                            <MobileTimePicker views={['minutes', 'seconds']} format="mm:ss" sx={{ width: '100%', ...inputCommonSx }}
                                value={secondsToDayjs(elapsedTime)}
                                onChange={(newValue) => handleTimeChange(newValue, setElapsedTime)}
                            />
                        </div>
                    </div>
                    <Button onClick={() => onSubmit(title, endTime, elapsedTime)}>Set</Button>
                </div>
            </Theme>
        </LocalizationProvider>
    );
};

export default TimerForm;
