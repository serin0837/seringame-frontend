import React, { Component } from "react";
import axios from "axios";

class Countries extends Component {
  state = {
    countries: [],
    isLoading: true,
  };
  componentDidMount() {
    axios.get("https://seringame.herokuapp.com/countries").then(({ data }) => {
      console.log({ data });
      //   this.setState({ countries: data, isLoading: false });
    });
  }
  render() {
    const { countries, isLoading } = this.state;
    return (
      <main>
        <p>{countries.country_name}</p>
        <p>country come out</p>
      </main>
    );
  }
}

export default Countries;
