import React from "react";
import "./App.css";
import Title from "./Component/Title";
import Traveller from "./Component/Traveller";

import { Router } from "@reach/router";
import Countries from "./Component/Countries";
import Homepage from "./Component/Homepage";

function App() {
  return (
    <div className="App">
      <Title></Title>
      <Traveller></Traveller>
      <Router>
        <Homepage path="/" />
        <Countries path="/continents/:continentid" />
      </Router>
    </div>
  );
}

export default App;
