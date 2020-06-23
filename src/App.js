import React from "react";
import "./App.css";
import Title from "./Component/Title";
import Traveller from "./Component/Traveller";
import Countries from "./Component/Countries";
import { Router } from "@reach/router";

function App() {
  return (
    <div className="App">
      <Title></Title>
      <Traveller></Traveller>
      <Router>
        <Countries path="/"></Countries>
      </Router>
    </div>
  );
}

export default App;
