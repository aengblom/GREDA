import React from "react";
import "./TeaserBubble.css";
import classnames from 'classnames';
import { Link } from "react-router-dom";

const TeaserBubble = ({ src, to = "", title, description, className, icon = false, success = true }) => (
<Link to={to} id="link">
    <div class="card media" style={{ "width": "10rem" }}>
      <div className="badge">
      </div>
      <div className="circle mx-auto">
        <img src={src} class={classnames(className)} width={100} height={100}/>
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
        <h3 class={classnames("card-title h2-em li-em")}>{title}</h3>
        <p class={classnames("card-text")} > {description}</p>
      </div>
    </div>
  </Link >
)

export default TeaserBubble;