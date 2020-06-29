import React from "react";
import "./App.css";
import Title from "./Component/Title";
import Traveller from "./Component/Traveller";
import Continents from "./Component/Continents";
import { Router } from "@reach/router";
import Countries from "./Component/Countries";

function App() {
  return (
    <div className="App">
      <Title></Title>
      <Traveller></Traveller>
      <Router>
        <Continents path="/"></Continents>
        <Countries path="/continents/:continent.name" />
      </Router>
    </div>
  );
}

export default App;
