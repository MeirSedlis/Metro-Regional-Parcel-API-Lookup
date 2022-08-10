import React from "react";
import "./App.css";
import Lookup from "./features/lookup/Lookup"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Metro Regional Parcel Lookup</h1>
        <p>
          Use this tool to look up information about a property using either the
          County PIN (property identification number) or the street name and
          number.
        </p>
      </header>
      <main>
        <Lookup />
      </main>
    </div>
  );
}

export default App;
