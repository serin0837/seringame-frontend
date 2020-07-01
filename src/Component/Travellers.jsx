import React, { Component } from "react";
import axios from "axios";
import Loader from "./Loader";
import { Link } from "@reach/router";

class Travellers extends Component {
  state = {
    travellers: [],
  };
  componentDidMount() {
    axios
      .get("https://seringame.herokuapp.com/travellers/")
      .then(({ data }) => {
        console.log(data, "<--");
        this.setState({ travellers: data });
      });
  }
  render() {
    const { travellers } = this.state;
    return (
      <aside>
        <h3>Traveller</h3>
        {travellers.map((traveller) => {
          console.log(traveller);
          return (
            <article key={traveller.id}>
              <Link to={`/travellers/${traveller.id}`}>
                <p>{traveller.Name}</p>
              </Link>
              {/* <Link to={`/travellers/${traveller.id}`}>
                <p>Imaginary Country</p>
              </Link> */}
              {/* <Link>
                <p>{traveller.Favorite_place}</p>
              </Link> */}
            </article>
          );
        })}
      </aside>
    );
  }
}

export default Travellers;
