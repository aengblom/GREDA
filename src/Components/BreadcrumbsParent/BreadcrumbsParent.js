import React, { Component } from "react";
import "./BreadcrumbsParent.css";

class BreadcrumbsParent extends Component {
  render() {
    return  <div className="breadcrumb breadcrumbs-parent">

                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item active"><a href="#">Home</a></li>
                    </ol>
                    </nav>

            </div>;
  }
}

export default BreadcrumbsParent;