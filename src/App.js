import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
      <Router>
        <div className="App">
          <Switch>
            <Route path = "/">
              {/*    home*/}
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
