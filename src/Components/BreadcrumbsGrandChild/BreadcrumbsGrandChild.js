import React, { Component } from "react";
import "../BreadcrumbsParent/BreadcrumbsParent.css";

class BreadcrumbsGrandChild extends Component {
  render() {
    return <div className="breadcrumb breadcrumbs-parent">

      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item"><a href="#">Library</a></li>
          <li class="breadcrumb-item active" aria-current="page">Data</li>
        </ol>
      </nav>

    </div>;
  }
}

export default BreadcrumbsGrandChild;