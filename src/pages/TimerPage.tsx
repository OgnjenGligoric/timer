import TimerComponent from "../components/timer/Timer";
import './Timerpage.css';
import {ErrorBoundary, FallbackProps} from "react-error-boundary";
import ErrorFallback from "../utils/ErrorFallback";

export default function TimerPage() {
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <TimerComponent title={"Title from Props"} endTime={4} elapsedTime={6} />
        </ErrorBoundary>
    );
}
