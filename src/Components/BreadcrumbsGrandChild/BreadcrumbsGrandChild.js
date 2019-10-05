import React, { Component } from "react";
import "./BreadcrumbsGrandChild.css";

class BreadcrumbsGrandChild extends Component {
  render() {
    return  <div className="breadcrumb breadcrumbs-grandchild">

                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item active" aria-current="page">Home</li>
                    </ol>
                    </nav>

            </div>;
  }
}

export default BreadcrumbsGrandChild;