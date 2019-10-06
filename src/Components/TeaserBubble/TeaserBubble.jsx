import React from "react";
import "./TeaserBubble.css";
import classnames from 'classnames';
import { BrowserRouter as Link } from "react-router-dom";

const TeaserBubble = ({ src, to = "", title, description, className, icon = false, success = true }) => (
  <Link to={to}>
    <div class="card" style={{ "width": "18rem" }}>
      <div className="badge">
      </div>
      <div className="circle mx-auto">
        <img src={src} class={classnames(className)} />
        <span class="badge">
          {icon && (success ?
            <i class="fa fa-check-circle success" id="success" aria-hidden="true"></i>
            :
            <i class="fa fa-times-circle danger" id="danger" aria-hidden="true"></i>
          )
          }
        </span>
      </div>
      <div class="card-body">
        <h3 class={classnames("card-title h2-em li-em", 'text-center˝')}>{title}</h3>
        <p class={classnames("card-text", 'text-center')} > {description}</p>
      </div>
    </div>
  </Link >
)

export default TeaserBubble;