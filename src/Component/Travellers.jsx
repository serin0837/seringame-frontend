import React, { Component } from "react";
import axios from "axios";
import Loader from "./Loader";
import { Link } from "@reach/router";

class Travellers extends Component {
  state = {
    travellers: [],
    isLoading: true,
  };
  componentDidMount() {
    axios
      .get("https://seringame.herokuapp.com/travellers/")
      .then(({ data }) => {
        // console.log(data, "<--");
        this.setState({ travellers: data, isLoading: false });
      });
  }
  render() {
    const { isLoading, travellers } = this.state;
    if (isLoading) return <Loader />;
    return (
      <aside>
        <h3>Traveller</h3>
        {travellers.map((traveller) => {
          // console.log(traveller);
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
