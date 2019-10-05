import React from "react";
import "./Button.css";
import classnames from 'classnames';

const Button = ({ children, className, onClick }) => (
  <button type="button"
    className={classnames("btn", className)}
    onClick={onClick}
  >
    {children}
  </button>
)

export default Button;