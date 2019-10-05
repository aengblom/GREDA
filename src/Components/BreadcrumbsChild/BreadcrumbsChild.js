import React, { Component } from "react";
import "../BreadcrumbsParent/BreadcrumbsParent.css";

class BreadcrumbsChild extends Component {
  render() {
    return  <div className="breadcrumb breadcrumbs-parent">

                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item active" aria-current="page"><a href="#">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Library</li>
                    </ol>
                    </nav>

            </div>;
  }
}

export default BreadcrumbsChild;