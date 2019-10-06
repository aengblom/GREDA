import React, { useState } from "react";
import "./ZipCode.css";
import classnames from "classnames";
import { Link, withRouter } from "react-router-dom";

const ZipCode = ({ history, setShowSP }) => {
  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [wasSubmitted, setWasSubmitted] = useState(false);

  const submitButton = () => {
    return (
      <button
        type="button"
        className="btn btn-primary mb-2"
        onClick={() => {
          setWasSubmitted(true);
          isValid && setShowSP(true);
          isValid && history.push("/recycle");
        }}
      >
        Submit
      </button>
    )
  }
  return (
    <form className="form-inline" noValidate>
      <div class="form-wrapper">
        <input
          type="text"
          value={input}
          onChange={e => {
            setInput(e.target.value)
            setIsValid(/^\d{5}(?:[-\s]\d{4})?$/.test(e.target.value));
          }}
          class={classnames(
            "form-control form-marginRight",
            { "is-valid": wasSubmitted && isValid },
            { "is-invalid": wasSubmitted && !isValid }
          )}
          placeholder="Zip Code"
          required
        />
        {isValid ? <Link to="/recycle">
          {submitButton()}
        </Link> : submitButton()}
      </div>
    </form>
  );
};

export default withRouter(ZipCode);
