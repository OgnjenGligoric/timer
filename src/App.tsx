import './App.css';
import {router} from "./routes/Routes";
import { RouterProvider } from "react-router-dom"
import Theme from "./components/shared/Theme";
import React from "react";
function App() {

  return (
      <Theme>
        <RouterProvider router = {router}/>
      </Theme>
  );
}

export default App;
