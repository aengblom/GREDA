import React, { Component } from "react";
import Image from "../Components/Image";
import "./ComingSoon.css";

class ComingSoon extends Component {
  render() {
    return (
      <div className="wrapper">
        <div id="comingSoon" className="text-center">
          <h1 className="h1 h1-em">Coming Soon</h1>
          <h4>
            We’re working hard to bring the freshest recycling data right to
            your fingertips.
          </h4>
          <Image src="/images/coming-soon.png" alt="Coming Soon" />
        </div>
      </div>
    );
  }
}

export default ComingSoon;
