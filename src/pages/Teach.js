import React, { Component } from "react";
import Image from "../Components/Image";
import "./ComingSoon.css";

class Teach extends Component {
  render() {
    return (
      <div className="wrapper">
        <div id="comingSoon" className="text-center">
          <h1 className="h1 h1-em">Go Learn</h1>
          <h4>
            Ready to level up? Take our quiz to assess your knowledge level! We
            can help you grow from where you are at.
          </h4>
          <Image src="/images/coming-soon.png" alt="Go Learn Coming Soon" />
        </div>
      </div>
    );
  }
}

export default Teach;
