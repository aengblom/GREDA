import React from "react";
import "./App.css";
//import "./Components/Home.js"
//import "./Components/RecycleMe.js"
//import "./Components/ShareMe.js"
//import "./Components/TeachMe.js"
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import BreadcrumbsParent from "./Components/BreadcrumbsParent";
import Card from "./Components/Card";
import BreadcrumbsChild from "./Components/BreadcrumbsChild";
import BreadcrumbsGrandChild from "./Components/BreadcrumbsGrandChild";

export default function App() {
  return (
    <div>
      <Header></Header>
      <BreadcrumbsParent></BreadcrumbsParent>
      <Card></Card>
      <Footer></Footer>
    </div>
  );
}
