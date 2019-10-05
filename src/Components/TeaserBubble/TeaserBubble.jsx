import React from "react";
import "./TeaserBubble.css";
import classnames from 'classnames';
import { Link } from "react-router-dom";

const TeaserBubble = ({ src, link = "", title, description, className }) => (
  <Link>
    <div class="card" style="width: 18rem;">
      <img src={src} class={classnames("rounded mx-auto d-block card-img-top", className)} />
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{description}</p>
      </div>
    </div>
  </Link>
)

export default TeaserBubble;