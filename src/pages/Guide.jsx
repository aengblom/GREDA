import React, { Component } from "react";
import TeaserBubble from '../Components/TeaserBubble';
import Card from '../Components/Card';

class Guide extends Component {
  render() {
    return (
      <div className="wrapper">
        <h2 className="text-center">Recycling Guide</h2>
            <div class="card-group">
              <TeaserBubble
                src="http://via.placeholder.com/100x100"
                to=''
                title="Containers"
              />
              <TeaserBubble
                src="http://via.placeholder.com/100x100"
                to=''
                title="Paper & Boxes"
              />
              <TeaserBubble
                src="http://via.placeholder.com/100x100"
                to=''
                title="Other"
              />
        </div>
        <Card cardtext="Top recycled items" noInput={true}/>
      </div>
    )
  }
}

export default Guide;
