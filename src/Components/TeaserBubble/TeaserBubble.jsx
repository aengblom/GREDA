import React from "react";
import "./TeaserBubble.css";
import classnames from 'classnames';
import { BrowserRouter as Link } from "react-router-dom";

const TeaserBubble = ({ src, to = "", title, description, className }) => (
  <Link to={to}>
    <div className="media">
      <div class="card pull-left" style={{ "width": "18rem", "height": "18rem" }}>
        <div className="badge">
        </div>
        <div className="circle mx-auto">
          <img src={src} class={classnames(className)} />
          <span class="badge badge-success pull-right">
            <i class="fas fa-check-circle"></i>
          </span>
        </div>
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{description}</p>
        </div>
      </div>
    </div>
  </Link>
)

export default TeaserBubble;