/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./Image.css";

const Image = props => (
  <img type="image"
    src={props.src}
    class="img-fluid"
    alt={props.alt}
  >
  </img>
)

  export default Image;