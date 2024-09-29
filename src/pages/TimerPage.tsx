import TimerComponent from "../components/timer/Timer";
import './Timerpage.css'
export default function TimerPage(){
    return <TimerComponent title={"Title from Props"} endTime={4} elapsedTime={2}></TimerComponent>;
};
