import React from "react";
import { Link } from "@reach/router";

const Countrycard = ({ country_name, capital, country_img }) => {
  return (
    <section>
      <h3>{country_name}</h3>
      <img className="country_img" src={country_img} alt={country_name} />
    </section>
  );
};

export default Countrycard;
