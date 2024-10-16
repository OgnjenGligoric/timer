import './App.css';
import {router} from "./routes/Routes";
import { RouterProvider } from "react-router-dom"
import React from "react";

function App() {
  return (
    <RouterProvider router = {router}/>
  );
}
export default App;
