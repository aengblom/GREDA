import React from "react";
import "./Parent.css";

const Parent = ({ title, children, breadcrumbs }) => {

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

export default Parent;