import "./styles.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Mentor from "./Mentor";
import Students from "./Students";
import Home from "./Home";
import MentorDetails from "./MentorDetails";

export default function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navbar navbar-expand sticky-top navbar-dark bg-success">
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item ">
                <Link to="/" className="nav-link active">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/mentor" className="nav-link active">
                  Mentor
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/students" className="nav-link active">
                  Students
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <br />
        <Switch>
          <Route exact path="/mentor">
            <Mentor />
          </Route>
          <Route path="/mentor/:id">
            <MentorDetails />
          </Route>
          <Route path="/students">
            <Students />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
