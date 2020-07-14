import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Title from "./Component/Title";
import Travellers from "./Component/Travellers";
import { Router } from "@reach/router";
import Countries from "./Component/Countries";
import Homepage from "./Component/Homepage";
import ImaginaryCountry from "./Component/ImaginaryCountry";
// import Navbar from "./Component/Continents";
import FavoriteCountry from "./Component/FavoriteCountry";
import VisitedCountry from "./Component/VisitedCountry";
import Traveller from "./Component/Traveller";
import Footer from "./Component/Footer";
import Continents from "./Component/Continents";
function App() {
  return (
    <div className="App">
      <Title />
      <Travellers />
      <Continents className="nav" />
      <Router className="main">
        <Homepage path="/" />
        <Countries path="/continents/:continentid" />
        <Traveller path="/travellers/:travellerid" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
