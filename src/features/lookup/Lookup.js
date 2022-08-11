import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Results from "./Results.js";

export default function Lookup() {
  
  const dispatch = useDispatch();
  const [PIN, setPIN] = useState(0);
 

  return (
    <div>
      <div id="pin-lookup">
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
          onClick={() => dispatch({type: 'FETCH_BY_COUNTY_PIN', payload: PIN})}
        >
          Search by PIN
        </button>
      </div>
      <div>
        <h2>Results</h2>
        <Results/>
      </div>
    </div>
  );
}
