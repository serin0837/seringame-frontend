import React from "react";
import { Link } from "@reach/router";

const Title = () => {
  return (
    <header>
      <Link to="/">
        <h1>World Traveller</h1>
      </Link>
    </header>
  );
};

// {"id":23,
// "country_name":"United States",
// "capital":"Washington",
// "description":"The United States of America (USA), commonly known as the United States (U.S. or US) or America, is a country mostly located in central North America, between Canada and Mexico. It consists of 50 states, a federal district, five major self-governing territories, and various possessions.",
// "activities":null,
// "terrain":null,
// "population":null,
// "GDP":22000,
// "created_at":"2020-07-02T15:30:41.915Z",
// "updated_at":"2020-07-02T15:30:41.915Z",
// "country_img":"https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
// "populations":[{"id":11,"very_small":null,"small":null,"medium":null,"big":null,"very_big":null,"created_at":"2020-06-30T15:30:48.446Z","updated_at":"2020-06-30T15:30:48.446Z","size":"very large"}],
// "religions":[{"id":1,"Christianity":"Austria","Islam":null,"Hinduism":null,"Unaffiliated":null,"Buddhism":null,"created_at":"2020-06-23T08:37:37.447Z","updated_at":"2020-07-02T15:34:09.536Z","name":"Christianity"}],
// "terrains":[{"id":5,"Plateau":null,"Mountain":"Liechtenstein","Plain":null,"Hills":null,"Valleys":null,"Glaciers":null,"Loess":null,"created_at":"2020-06-23T09:09:13.125Z","updated_at":"2020-07-02T15:37:58.368Z","name":"Plain"}]}]
export default Title;
