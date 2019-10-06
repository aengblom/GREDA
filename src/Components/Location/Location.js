/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./Location.css";

class Location extends Component {
  render() {
    return (
      <div id="location" className="p-2 flex-grow-1">
        <p className="city">{this.props.city}</p>
        <p className="state">{this.props.state}</p>
        <p className="change">change</p>
      </div>
    );
  }
}

export default Location;
