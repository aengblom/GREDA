import React from "react";
import "./App.css";
//import "./Components/Home.js"
//import "./Components/RecycleMe.js"
//import "./Components/ShareMe.js"
//import "./Components/TeachMe.js"
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Card from "./Components/Card";

export default function App() {
  return (
    <div>
      <Header></Header>
      <Card></Card>
      <Footer></Footer>
    </div>
  );
}
