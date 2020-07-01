import React, { Component } from "react";
import axios from "axios";
import { Link } from "@reach/router";

//continent list
class Navbar extends Component {
  state = {
    continents: [],
  };
  componentDidMount() {
    axios.get("https://seringame.herokuapp.com/continents").then(({ data }) => {
      console.log(data);
      this.setState({ continents: data });
    });
  }
  render() {
    const { continents } = this.state;
    return (
      <nav>
        {continents.map((continent) => {
          return (
            <ul key={continent.id}>
              <Link to={`/continents/${continent.id}`}>
                <p>{continent.name}</p>
              </Link>
            </ul>
          );
        })}
      </nav>
    );
  }
}

export default Navbar;
