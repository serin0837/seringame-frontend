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
      <main calssName="continentlist">
        {continents.map((continent) => {
          return (
            <ul>
              <Link
                className="{continent.name}"
                key={continent.id}
                to={`/continents/${continent.id}`}
              >
                <h2>{continent.name}</h2>
                <img
                  className="continent_img"
                  src={continent.continent_img}
                  alt={continent.name}
                />
              </Link>
            </ul>
          );
        })}
      </main>
    );
  }
}

export default Continents;
