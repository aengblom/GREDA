import React from "react";
import "./TeaserBubble.css";
import classnames from 'classnames';
import { BrowserRouter as Link } from "react-router-dom";

const TeaserBubble = ({ src, to = "", title, description, className, icon = false, success = true }) => (
  <Link to={to}>
    <div className="media">
      <div class="card pull-left" style={{ "width": "18rem", "height": "18rem" }}>
        <div className="badge">
        </div>
        <div className="circle mx-auto">
          <img src={src} class={classnames(className)} />
          <span class="badge pull-right">
            {icon && (success ?
              <i class="fa fa-check-circle success" id="success" aria-hidden="true"></i>
              :
              <i class="fa fa-times-circle danger" id="danger" aria-hidden="true"></i>
            )
            }
          </span>
        </div>
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{description}</p>
        </div>
      </div>
    </div>
  </Link >
)

export default TeaserBubble;