import React, { Component } from "react";
import axios from "axios";
import Loader from "./Loader";
import { Link } from "@reach/router";

class Continents extends Component {
  state = {
    continents: [],
    isLoading: true,
  };
  componentDidMount() {
    axios.get("https://seringame.herokuapp.com/continents").then(({ data }) => {
      this.setState({ continents: data, isLoading: false });
    });
  }
  render() {
    const { isLoading, continents } = this.state;
    if (isLoading) return <Loader />;
    return (
      <main>
        {continents.map((continent) => {
          return (
            <Link key={continent.id} to={`/continents/${continent.name}`}>
              <h2>{continent.name}</h2>
            </Link>
          );
        })}
      </main>
    );
  }
}

export default Continents;
