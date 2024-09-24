import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Component} from "react";
import TimerComponent from "./components/timer/TimerComponent";

function App() {
  return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path = "/">
                <TimerComponent title="Title from Props" endTime={10} elapsedTime={0} />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
