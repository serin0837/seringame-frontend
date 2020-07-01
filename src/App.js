import React from "react";
import "./App.css";
import Title from "./Component/Title";
import Travellers from "./Component/Travellers";
import { Router } from "@reach/router";
import Countries from "./Component/Countries";
import Homepage from "./Component/Homepage";
import ImaginaryCountry from "./Component/ImaginaryCountry";
import Navbar from "./Component/Navbar";
import FavoriteCountry from "./Component/FavoriteCountry";
import VisitedCountry from "./Component/VisitedCountry";
import Traveller from "./Component/Traveller";

function App() {
  return (
    <div className="App">
      <Title></Title>
      <Navbar></Navbar>
      <Travellers></Travellers>
      {/* <ImaginaryCountry></ImaginaryCountry> */}
      <Router>
        <Homepage path="/" />
        <Countries path="/continents/:continentid" />
        <Traveller path="/travellers/:travellerid" />
        {/* <VisitedCountry path=""></VisitedCountry>
        <FavoriteCountry ></FavoriteCountry> */}
        {/* <ImaginaryCountry path="/travellers/:travellerid"></ImaginaryCountry> */}
      </Router>
    </div>
  );
}

export default App;
