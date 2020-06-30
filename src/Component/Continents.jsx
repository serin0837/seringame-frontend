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
      <nav>
        {continents.map((continent) => {
          return (
            <ul key={continent.id}>
              <Link to={`/continents/${continent.id}`}>
                <h2>{continent.name}</h2>
              </Link>
            </ul>
          );
        })}
      </nav>
    );
  }
}

export default Continents;
