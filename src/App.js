import React from "react";
import "./App.css";
import Title from "./Component/Title";
import Travellers from "./Component/Travellers";
import { Router } from "@reach/router";
import Countries from "./Component/Countries";
import Traveller from "./Component/Traveller";
import Footer from "./Component/Footer";
import Continents from "./Component/Continents";

function App() {
  return (
    <div className="App">
      <Title />
      <Travellers />
      <Router>
        <Continents path="/" />
        <Countries path="/continents/:continentid" />
        <Traveller path="/travellers/:travellerid" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
