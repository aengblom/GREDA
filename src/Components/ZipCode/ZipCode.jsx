import React, { useState } from "react";
import "./ZipCode.css";
import classnames from "classnames";
import { Link } from "react-router-dom";

const ZipCode = () => {
  const [input, setInput] = useState("");
  const [valid, setValid] = useState(false);

  var setValidZip = () => {
    const v = /^\d{5}(?:[-\s]\d{4})?$/.test(input);
    console.log(input);
    setValid(v);
    console.log(v, valid, "here");
  };
  return (
    <form className="form-inline" noValidate>
      <div class="form-wrapper">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          class={classnames(
            "form-control form-marginRight",
            { "is-valid": valid },
            { "is-invalid": !valid }
          )}
          id="validationDefault05"
          placeholder="Zip Code"
          required
        />
        <Link to="/dashboard">
          <button
            type="submit"
            className="btn btn-primary mb-2"
            onClick={async () => {
              await setValidZip();
            }}
          >
            Submit
          </button>
        </Link>
      </div>
    </form>
  );
};

export default ZipCode;
