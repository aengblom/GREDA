import React, { Component } from "react";
import "./ChildPage.css";
import BreadcrumbsChild from "./Components/BreadcrumbsChild";

class ChildPage extends Component {
  render() {
    return  <div className="page child-page">
                <div className="wrapper">
                    <BreadcrumbsChild></BreadcrumbsChild>

     
                </div>
            </div>;
  }
}

export default ChildPage;