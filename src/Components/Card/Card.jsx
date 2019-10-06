import React from "react";
import "./Card.css";
import classnames from "classnames";
import ZipCode from "../ZipCode"

const Card = props => {
  console.log(props)
  return (
    <div className="card card-extraPadding card-extraMargin card-shadow">
      <div className="card-body card-extraPadding text-center">
        <h2 className="card-title h1 h1-em">{props.cardtext}</h2>
        {props.noInput || <ZipCode setShowSP={props.setShowSP}></ZipCode>}
      </div>
    </div>
  );
}
export default Card;
