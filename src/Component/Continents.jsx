import React, { Component } from "react";
import axios from "axios";
import { Link } from "@reach/router";

//continent list
class Continents extends Component {
  state = {
    continents: [],
  };
  componentDidMount() {
    axios.get("https://seringame.herokuapp.com/continents").then(({ data }) => {
      // console.log(data);
      this.setState({ continents: data });
    });
  }
  render() {
    const { continents } = this.state;
    return (
      <main className="main">
        {continents.map((continent) => {
          return (
            <ul key={continent.id}>
              <Link to={`/continents/${continent.id}`}>
                <p className="continent-list">{continent.name}</p>
              </Link>
            </ul>
          );
        })}
      </main>
    );
  }
}

export default Continents;
