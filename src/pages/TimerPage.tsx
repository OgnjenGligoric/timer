import TimerComponent from "../components/Timer";
import './Timerpage.css'
export default function TimerPage(){
    return <TimerComponent title={"Title"} endTime={10} elapsedTime={6}></TimerComponent>;
};
