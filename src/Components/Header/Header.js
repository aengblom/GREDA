/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Home from "../../pages/Home";
import Recycle from "../../pages/Recycle";
import Share from "../../pages/Share";
import Teach from "../../pages/Teach";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Header.css";

// function Home() {
//   return <h2>Home</h2>;
// }

// function RecycleMe() {
//   return <h2>Recycle Me!</h2>;
// }

// function Share() {
//   return <h2>Share</h2>;
// }

// function Teach() {
//   return <h2>Teach Me</h2>;
// }

class Header extends Component {
  render() {
    return (
      <div>
        <Router>
          <nav className="navbar navbar-expand-lg navbar-dark grad">
            {/* <a className="navbar-brand" href="#">
              GREDA
            </a> */}
            <Link to="/home" className="navbar-brand">
              GREDA
            </Link>
            <Link to="/recycle">Recycle Me</Link>
            <Link to="/share">Share Me</Link>
            <Link to="/teach">Teach Me</Link>
          </nav>
          <Switch>
            <Route path="/recycle">
              <Recycle />
            </Route>
            <Route path="/share">
              <Share />
            </Route>
            <Route path="/teach">
              <Teach />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Header;
