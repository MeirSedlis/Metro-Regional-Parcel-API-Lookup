import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Results from "./Results.js";

export default function Lookup() {
  const dispatch = useDispatch();
  const [PIN, setPIN] = useState(0);
  const [aNumber, setANumber] = useState(0);
  const [street, setStreet] = useState("");

  return (
    <div>
      <div id="address-lookup" className="searchBox">
        <label className="large-label" htmlFor="address-number-input">
          Enter House Number
        </label>
        <input
          className="large-input"
          id="address-number-input"
          aria-label="Enter house number"
          value={aNumber}
          onChange={(e) => setANumber(e.target.value)}
        />
        <label className="large-label" htmlFor="street-input">
          Enter Street Name
        </label>
        <input
          className="large-input"
          id="street-input"
          aria-label="Enter street name"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />

        <button
          className="large-button"
          aria-label="Search by PIN"
          onClick={() =>
            dispatch({ type: "FETCH_BY_ADDRESS", payload: (aNumber, street) })
          }
        >
          Search by Address
        </button>
        <p className="small-text">For best results, only enter the street name. (Ex: 20th, Hennepin NOT street/avenue)</p>
      </div>
      <div id="pin-lookup" className="searchBox">
        <label className="large-label" htmlFor="pin-input">
          Enter County PIN
        </label>
        <input
          className="large-input"
          id="pin-input"
          aria-label="Enter county PIN"
          value={PIN}
          onChange={(e) => setPIN(e.target.value)}
        />

        <button
          className="large-button"
          aria-label="Search by PIN"
          onClick={() =>
            dispatch({ type: "FETCH_BY_COUNTY_PIN", payload: PIN })
          }
        >
          Search by PIN
        </button>
      </div>
      <div>
        <h2>Results</h2>
        <Results />
      </div>
    </div>
  );
}
