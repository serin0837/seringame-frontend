import React, { Component } from "react";
import axios from "axios";
import Loader from "./Loader";
import Countrycard from "./Countrycard";
import Continents from "./Continents";

class Countries extends Component {
  state = {
    countries: [],
    isLoading: true,
  };
  componentDidMount() {
    axios.get("https://seringame.herokuapp.com/countries").then(({ data }) => {
      console.log(data);
      this.setState({ countries: data, isLoading: false });
    });
  }
  render() {
    const { isLoading, countries } = this.state;
    if (isLoading) return <Loader />;
    return (
      <main className="countries">
        <ul>
          <Continents />
        </ul>
        <section>
          {countries.map((country) => {
            console.log(country);
            return <Countrycard key={country.id} {...country} />;
          })}
        </section>
      </main>
    );
  }
}

export default Countries;
