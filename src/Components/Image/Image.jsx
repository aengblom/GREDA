/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./Image.css";
import classnames from 'classnames'

const Image = props => (
  <img type="image"
    src={props.src}
    class={classnames("img-fluid")}
    alt={props.alt}
    style={props.style}
  >
  </img>
)

export default Image;