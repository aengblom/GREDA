import React, { Component } from "react";
import Image from "../Components/Image";
import "./ComingSoon.css";

class Share extends Component {
  render() {
    return (
      <div className="wrapper">
        <div id="comingSoon" className="text-center">
          <h1 className="h1 h1-em">Go Share</h1>
          <h4>
            Let’s be honest, your friend will probably never download this app.
            Here you’ll find resources to share the good word and help demystify
            recycling.
          </h4>
          <Image src="/images/coming-soon.png" alt="Go Share Coming Soon" />
        </div>
      </div>
    );
  }
}

export default Share;
