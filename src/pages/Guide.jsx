import React, { Component } from "react";
import TeaserBubble from "../Components/TeaserBubble";
import Card from "../Components/Card";

class Guide extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1 className="text-center h1-em mb-5">Recycling Guide</h1>
        <div class="card-group card-spaceBetween ">
          <TeaserBubble
            src="http://via.placeholder.com/100x100"
            to="/recycle/container"
            title="Containers"
          />
          <TeaserBubble
            src="http://via.placeholder.com/100x100"
            to='/'
            title="Paper & Boxes"
          />
          <TeaserBubble
            src="http://via.placeholder.com/100x100"
            to='/'
            title="Other"
          />
        </div>

        <Card cardtext="Top recycled items" noInput={true} />
      </div>
    );
  }
}

export default Guide;
