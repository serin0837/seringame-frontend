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
        <h5>Traveller</h5>
        {travellers.map((traveller) => {
          // console.log(traveller);
          return (
            <article key={traveller.id}>
              <Link to={`/travellers/${traveller.id}`}>
                <p>{traveller.Name}</p>
                <p>{traveller.avata}</p>
              </Link>
              <button>be a traveller</button>
            </article>
          );
        })}
      </aside>
    );
  }
}

export default Travellers;
