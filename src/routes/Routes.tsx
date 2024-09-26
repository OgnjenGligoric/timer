import {createBrowserRouter} from "react-router-dom"
import App from "../App";
import TimerPage from "../pages/TimerPage";
import ExamplePage from "../pages/ExamplePage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <TimerPage/>
    }
])
