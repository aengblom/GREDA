import React, { useState } from "react";
/* eslint-disable jsx-a11y/anchor-is-valid */
import ComingSoon from "../../pages/ComingSoon";
import Home from "../../pages/Home";
import Guide from "../../pages/Guide";
import Share from "../../pages/Share";
import Teach from "../../pages/Teach";
import Child2Grid from "../../pages/Child2Grid";
import Location from "../../Components/Location";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Header.css";
import ContainerParent from "../../pages/ContainerParent";

const Header = () => {
  const [showSP, setShowSPState] = useState(false);

  const setShowSP = bool => {
    console.log(bool, "here");
    setShowSPState(bool);
  };
  return (
    <div>
      <Router>
        <nav className="navbar sticky-top d-flex navbar-dark grad">
          {showSP && (
            <Location
              className="p-2 flex-grow-1"
              city="St. Paul"
              state="Minnesota"
            ></Location>
          )}
          <Link to="/home" className="p-2 navbar-brand">
            <span id="logo">
              <img
                src="https://via.placeholder.com/135x42"
                alt="Greta"
                border="0"
              />
            </span>
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
              <li
                className="nav-item active"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
              >
                <Link to="/recycle">Recycle Me</Link>
              </li>
              <li
                className="nav-item active"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
              >
                <Link to="/share">Share Me</Link>
              </li>
              <li
                className="nav-item active"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
              >
                <Link to="/teach">Teach Me</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route exact path="/recycle">
            <Guide />
          </Route>
          <Route exact path="/recycle/container/plasticwithnonumbers">
            <Child2Grid />
          </Route>
          <Route exact path="/recycle/container">
            <ContainerParent />
          </Route>
          <Route exact path="/share">
            <Share />
          </Route>
          <Route exact path="/teach">
            <Teach />
          </Route>
          <Route path="/home">
            <Home setShowSP={setShowSP} />
          </Route>
          <Route path="/">
            <ComingSoon />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Header;
