import React, { Component } from "react";
import "../BreadcrumbsParent/BreadcrumbsParent.css";
import { Link } from "react-router-dom";

const BreadcrumbsChild = ({ grandchildName="add name here" }) => {
  return (
    <div className="breadcrumb breadcrumbs-parent">

      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><Link to="/recycle">Recycling Guide</Link></li>
          <li class="breadcrumb-item active" aria-current="page">{grandchildName}</li>
        </ol>
      </nav>
    </div>
  )
}

export default BreadcrumbsChild;