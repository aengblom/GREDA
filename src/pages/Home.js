import React from "react";
import Card from "../Components/Card/Card";

const Home = ({ setShowSP }) => {
  return (
    <div className="page page-home">
      <div className="wrapper">
        <div className="section">
          <h1 className="h3 text-center">
            Enter a zip code to show specific recycling information for your
            area.
            </h1>
        </div>
        <Card cardtext="What's your zip code?" setShowSP={setShowSP}></Card>
        <div className="section">
          <p className="text-center">
            <span className="font-weight-bold">Tip: </span>Visting another
            city? You can change the zip code to see recycling and composting
            information for another location.
            </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
