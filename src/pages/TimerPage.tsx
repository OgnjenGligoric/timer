import TimerComponent from "../components/timer/Timer";
import './Timerpage.css'
export default function TimerPage(){
    return <TimerComponent title={"Title from Props"} endTime={10} elapsedTime={6}></TimerComponent>;
};
