import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import BreadcrumbsParent from "./Components/BreadcrumbsParent";
import Card from "./Components/Card";
import BreadcrumbsChild from "./Components/BreadcrumbsChild";
import BreadcrumbsGrandChild from "./Components/BreadcrumbsGrandChild";

import Splash from "./pages/Splash";
 
function App() {
  return (
    <div className="app">
      <Header></Header>
      <Footer></Footer>
    </div>
  );
}
//export default function App() {

export default App;
