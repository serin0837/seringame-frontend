import React, { Component } from "react";
import axios from "axios";
import Loader from "./Loader";

class Traveller extends Component {
  state = {
    travellers: [],
  };
  componentDidMount() {
    axios.get("https://seringame.herokuapp.com/travellers").then(({ data }) => {
      this.setState({ travellers: data });
    });
  }
  render() {
    const { travellers } = this.state;
    return (
      <aside>
        <h3>Traveller</h3>
        {travellers.map((traveller) => {
          return (
            <article key={traveller.id}>
              <p>{traveller.Name}</p>
              <p>{traveller.Visited_place}</p>
              <p>{traveller.Favorite_place}</p>
            </article>
          );
        })}
      </aside>
    );
  }
}

export default Traveller;
