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
          <p>
            Population:
            {populations.map((population) => {
              console.log(population);
              return population.size;
            })}
          </p>
          {/* // <p>{religions.name}</p>
          // <p>{terrains.name}</p> */}

          {/* "populations":[{"id":11,
          "very_small":null,
          "small":null,
          "medium":null,
          "big":null,
          "very_big":null,
          "created_at":"2020-06-30T15:30:48.446Z",
          "updated_at":"2020-06-30T15:30:48.446Z",
          "size":"very large"}], */}
        </li>
      </ul>
    </article>
  );
};
//populations, religions, terrains not come out in webpage
export default Countrycard;
