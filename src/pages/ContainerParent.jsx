import React, { Component } from "react";
import TeaserBubble from "../Components/TeaserBubble";
import BreadcrumbsParent from "../Components/BreadcrumbsParent";
import BreadcrumbsChild from "../Components/BreadcrumbsChild";

const ContainerParent = () => {
  return (
    <div className="wrapper">
      <BreadcrumbsChild grandchildName="Containers" />
      <h1 className="text-center h1-em mb-5">Container</h1>
      <div class="card-group card-spaceBetween">
        <TeaserBubble
          src="http://via.placeholder.com/100x100"
          to=""
          title="Plastic with Numbers"
        />
        <TeaserBubble
          src="http://via.placeholder.com/100x100"
          to="/recycle/container/plasticwithnonumbers"
          title="Plastic with no Numbers"
        />
        <TeaserBubble
          src="/images/metal@3x.png"
          to=""
          title="Metal"
        />
      </div>
      <div class="card-group card-spaceBetween">
        <TeaserBubble
          src="/images/glass@3x.png"
          to=""
          title="Glass"
        />
        <TeaserBubble
          src="/images/large-size@3x.png"
          to=""
          title="Large Size"
        />
        <TeaserBubble
          src="/images/other@3x.png"
          to=""
          title="Other"
        />
      </div>
    </div>
  );
};

export default ContainerParent;
