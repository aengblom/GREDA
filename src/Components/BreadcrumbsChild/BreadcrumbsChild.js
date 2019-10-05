import React, { Component } from "react";
import "./BreadcrumbsChild.css";

class BreadcrumbsChild extends Component {
  render() {
    return  <div className="breadcrumb breadcrumbs-child">

                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item active" aria-current="page">Home</li>
                    </ol>
                    </nav>

            </div>;
  }
}

export default BreadcrumbsChild;