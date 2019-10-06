import React, { Component } from "react";
import "./BreadcrumbsParent.css";
import { Link } from "react-router-dom";

class BreadcrumbsParent extends Component {
  render() {
    return <div className="breadcrumb breadcrumbs-parent">

      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item active"><Link to="/recycle">Recycling Guide</Link></li>
        </ol>
      </nav>

    </div>;
  }
}

export default BreadcrumbsParent;