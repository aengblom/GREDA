import React, { Component } from "react";
import "./BreadcrumbsParent.css";

class BreadcrumbsParent extends Component {
  render() {
    return  <div className="breadcrumb">

                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item active" aria-current="page">Home</li>
                    </ol>
                    </nav>

            </div>;
  }
}

export default BreadcrumbsParent;