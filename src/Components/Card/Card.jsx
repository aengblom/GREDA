import React from "react";
import "./Card.css";
import classnames from "classnames";

const Card = props => (
  <div className="card card-extraPadding card-extraMargin card-shadow">
    <div className="card-body card-extraPadding text-center">
      <h2 className="card-title h1">{props.cardtext}</h2>
      <input></input>
    </div>
  </div>
);

export default Card;
