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
import BreadcrumbsParent from "./Components/BreadcrumbsParent";

export default function App() {
  return (
    <div>
      <Header></Header>
      <BreadcrumbsParent></BreadcrumbsParent>
      <Footer></Footer>
    </div>
  );
}
