/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Home from "../../pages/Home";
import Guide from "../../pages/Guide";
import Share from "../../pages/Share";
import Teach from "../../pages/Teach";
import Child2Grid from '../../pages/Child2Grid';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div>
        <Router>
          <nav className="navbar sticky-top d-flex justify-content-end navbar-dark grad">
            <Link to="/home" className="navbar-brand">
              GREDA
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse navbar-flex"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav nav-alignLeft">
                <li className="nav-item active">
                  <Link to="/recycle">Recycle Me</Link>
                </li>
                <li className="nav-item active">
                  <Link to="/share">Share Me</Link>
                </li>
                <li className="nav-item active">
                  <Link to="/teach">Teach Me</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
          
            <Route exact path="/recycle">
              <Guide />
            </Route>
            <Route exact path="/recycle/nameOfParent/nameofchild">
              <Child2Grid />
            </Route>
            <Route exact path="/share">
              <Share />
            </Route>
            <Route exact path="/teach">
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
