import React from "react";

const Countrycard = ({
  GDP,
  description,
  country_name,
  capital,
  country_img,
  populations,
  religions,
  terrains,
}) => {
  return (
    <article>
      <ul>
        <li>
          <img className="country_img" src={country_img} alt={country_name} />
          <h4>{country_name}</h4>
          <p>{capital}</p>
          {/* <p>{description}</p> */}
          <p>GDP: {GDP} (billions)</p>
          {/* <p>{populations.size}</p>
          <p>{religions.name}</p>
          <p>{terrains.name}</p> */}
        </li>
      </ul>
    </article>
  );
};
//populations, religions, terrains not come out in webpage
export default Countrycard;
