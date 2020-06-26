import React from "react";
import "./App.css";
import Title from "./Component/Title";
import Traveller from "./Component/Traveller";
import Continents from "./Component/Continents";
import { Router } from "@reach/router";

function App() {
  return (
    <div className="App">
      <Title></Title>
      <Traveller></Traveller>
      <Router>
        <Continents path="/"></Continents>
      </Router>
    </div>
  );
}

export default App;
