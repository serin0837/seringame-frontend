import React, { Component } from "react";
import axios from "axios";
import Loader from "./Loader";

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
      <main>
        {countries.map((country) => {
          console.log(country);
          return (
            <article key={country.id}>
              <h3>{country.country_name}</h3>
              <p>{country.capital}</p>
              <img src={country.country_img} alt={country.country_name} />
            </article>
          );
        })}
      </main>
    );
  }
}

export default Countries;
