import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Component} from "react";
import {Link} from 'react-router-dom'

class Home extends Component {
    render() {
        return null;
    }
}

function App() {
  return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path = "/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
