import React from "react";
import "./Child2.css";

const Child2 = ({ title, children, breadcrumbs }) => {

  return (
    <div className="wrapper">
      {breadcrumbs}
      <h1 className="text-center h1-em mb-5">{title}</h1>
      <div class="card-group">
        {children}
      </div>
    </div>
  )
}

export default Child2;