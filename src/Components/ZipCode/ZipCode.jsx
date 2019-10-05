import React, { useState } from 'react';
import "./ZipCode.css";
import classnames from 'classnames';
import { Link } from "react-router-dom";

const ZipCode = () => {
  const [input, setInput] = useState("");
  const [valid, setValid] = useState(false);

  var setValidZip = () => {
    const v = /^\d{5}(?:[-\s]\d{4})?$/.test(input)
    console.log(input)
    setValid(v);
    console.log(v, valid, "here")
  }
  return (
    <form className="form-inline" noValidate>
      <label>Enter your Zip Code</label>
      <div class="col-md-3 mb-3">
        <input type="text" value={input} onChange={e => setInput(e.target.value)} class={classnames("form-control", { "is-valid": valid }, { "is-invalid": !valid })} id="validationDefault05" placeholder="Zip Code" required />
      </div>
      <Link to="/dashboard">
        <button type="submit" disabled={!valid} className="btn btn-primary mb-2" onClick={async () => {
          await setValidZip();
        }}>Submit</button>
      </Link>
    </form>
  )
}

export default ZipCode;