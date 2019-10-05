import React from "react";
import logo from "./logo.svg";
import "./App.css";
//import "./Components/Home.js"
//import "./Components/RecycleMe.js"
//import "./Components/ShareMe.js"
//import "./Components/TeachMe.js"
import Header from "./Components/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./Components/Footer";

function Home() {
  return <h2>Home</h2>;
}

function RecycleMe() {
  return <h2>Recycle Me!</h2>;
}

function Share() {
  return <h2>Share</h2>;
}

function Teach() {
  return <h2>Teach Me</h2>;
}

export default function App() {
  return (
    <div>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/recycle">Recycle Me</Link>
            </li>
            <li>
              <Link to="/share">Share Me</Link>
            </li>
            <li>
              <Link to="/teach">Teach Me</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/recycle">
            <RecycleMe />
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
      </div>
    </Router>
    
    <Footer></Footer>
    </div>
  );
}