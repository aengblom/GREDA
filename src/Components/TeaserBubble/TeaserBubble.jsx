import React from "react";
import "./TeaserBubble.css";
import classnames from "classnames";
import { Link } from "react-router-dom";

const TeaserBubble = ({
  src,
  to = "",
  title,
  description,
  className,
  icon = false,
  success = true
}) => (
  <Link to={to} id="link">
    <div class="card media" style={{ width: "10rem" }}>
      {/* <div className="badge"></div> */}
      <span class="badge badge-align">
        {icon &&
          (success ? (
            <i
              class="fa fa-check-circle success"
              id="success"
              aria-hidden="true"
            ></i>
          ) : (
            <i
              class="fa fa-times-circle danger"
              id="danger"
              aria-hidden="true"
            ></i>
          ))}
      </span>
      <div className="circle circle-alignCenter">
        <img src={src} class={classnames(className)} />
      </div>
      <div class="card-body">
        <h3 class={classnames("card-title h2-em li-em", "text-center˝")}>
          {title}
        </h3>
        <p class={classnames("card-text", "text-center")}> {description}</p>
      </div>
    </div>
  </Link>
);

export default TeaserBubble;
