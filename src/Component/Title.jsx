import React from "react";
import { Link } from "@reach/router";
import logo from "../img/logo.png";

const Title = () => {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <h1 className="title"> World Countries</h1>

      <p>Traveller</p>
    </header>
  );
};

export default Title;
