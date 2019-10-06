import React, { Component } from "react";
import TeaserBubble from "../Components/TeaserBubble";
import Card from "../Components/Card";

class Guide extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1 className="text-center h1-em mb-5">Go Recycle</h1>
        <div class="card-group card-spaceBetween ">
          <TeaserBubble
            src="/images/containers@3x.png"
            to="/recycle/container"
            title="Containers"
          />
          <TeaserBubble
            src="/images/paper-and-boxes@3x.png"
            to='/'
            title="Paper & Boxes"
          />
          <TeaserBubble
            src="/images/other-image-recycle-guide@3x.png"
            to='/'
            title="Other"
          />
        </div>

        <Card cardtext="Top recycled items ➔" noInput={true} />
      </div>
    );
  }
}

export default Guide;
