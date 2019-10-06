/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Home from "../../pages/Home";
import Guide from "../../pages/Guide";
import Share from "../../pages/Share";
import Teach from "../../pages/Teach";
import Location from "../../Components/Location";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div>
        <Router>
          <nav className="navbar sticky-top d-flex navbar-dark grad">
            <Location
              className="p-2 flex-grow-1"
              city="St. Paul"
              state="Minnesota"
            ></Location>
            <Link to="/home" className="p-2 navbar-brand">
              GREDA
            </Link>
            <button
              className="p-2 navbar-toggler"
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
              <ul className="navbar-nav nav-alignRight">
                <li className="nav-item active">
                  <Link
                    to="/recycle"
                    data-toggle="collapse"
                    data-target=".navbar-collapse.show"
                  >
                    Recycle Me
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link
                    to="/share"
                    data-toggle="collapse"
                    data-target=".navbar-collapse.show"
                  >
                    Share Me
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link
                    to="/teach"
                    data-toggle="collapse"
                    data-target=".navbar-collapse.show"
                  >
                    Teach Me
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route path="/recycle">
              <Guide />
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
