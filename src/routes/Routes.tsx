import {createBrowserRouter} from "react-router-dom"
import TimerPage from "../pages/TimerPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <TimerPage/>
    }
])
